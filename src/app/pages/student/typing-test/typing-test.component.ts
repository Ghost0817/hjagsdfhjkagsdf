import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { contents } from 'src/app/core/constants/fake-content'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.scss']
})
export class TypingTestComponent implements OnInit {

  lessons;

  timeIsRunning = false;
  timeCountIsUp = true;
  strTime = "0:00";
  seconds = 0;
  minutes = 0;
  timeLimit = 0;
  wpm = "0";
  lwpm = "0";
  errors = 0;
  characters = 0;

  speedType = 'wpm';
  typingProcess = [];
  testIndex = 0;
  wordIndex = 0;
  letterIndex = 0;
  words = [];
  formGroup: FormGroup;
  wrote = new FormControl("");
  timer = null;

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService) {
    activatedRoute.params.subscribe(params => {
      console.log(params.slug);
      if(params.slug == "1-minute") {
        this.minutes = 1;
        this.seconds = 0;
        this.timeLimit = 60;
        this.timeCountIsUp = false;
      }
      if(params.slug == "3-minute") {
        this.minutes = 3;
        this.seconds = 0;
        this.timeLimit = 180;
        this.timeCountIsUp = false;
      }
      if(params.slug == "5-minute") {
        this.minutes = 5;
        this.seconds = 0;
        this.timeLimit = 300;
        this.timeCountIsUp = false;
      }
      // this.api.get('/api/games').subscribe(response => {
      //   console.log(response);
      // })
      // this.api.get('/api/tips').subscribe(response => {
      //   console.log(response);
      // })
      // this.api.get('/api/lessons').subscribe(response => {
      //   console.log(response);
      // })
      // this.api.get('/api/categories').subscribe(response => {
      //   console.log(response);
      // })
      // this.api.get('/api/tags').subscribe(response => {
      //   console.log(response);
      // })
      // this.api.get('/api/posts').subscribe(response => {
      //   console.log(response);
      // })
      this.api.get('/api/studentTests').subscribe(response => {
        console.log(response);
        this.lessons = response;


        this.testIndex = this.randomNumber(0, this.lessons.length - 1);
        this.words = this.lessons[this.testIndex].tutor.split(" ").map(word => {
          return word + " ";
        });
        this.formGroup = new FormGroup({
          wrote: new FormControl("")
        });
        this.formGroup.valueChanges.subscribe(change => {
          console.log(change);
          this.onChange(change.wrote);
        });
        this.words.forEach(word => {
          this.typingProcess.push({word, status: 'unknown', letters: []});
        });

      })
    });
  }

  ngOnInit(): void {
  }

  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  calculateSpeed(characters: number, seconds: number, errors: number) {
    var words, minutes, speed;
    if (this.speedType == "kph") {
      speed = Math.round(characters / seconds * 3600);
    } else if (this.speedType == "wpm") {
      words = (characters - (errors * 5)) / 5;		// begin WPM calculation
      minutes = seconds / 60;
      speed = Math.max(Math.round(words / minutes), 0);
    } else {
      words = (characters - (errors * 5));		// begin WPM calculation
      minutes = seconds / 60;
      speed = Math.max(Math.round(words / minutes), 0);
    }
    return (speed == Infinity) ? 100 : speed;
  }

  getLetters(word) {
    return word.split("");
  }

  onChange(wrote) {
    if(this.timeIsRunning == false) {
      this.timer = setInterval(this.updateTimer, 1000);
      this.timeIsRunning = true;
    }

    const letterIndex = wrote.length - 1;
    if (wrote.length <= this.words[this.wordIndex].length) {
      if (wrote === this.words[this.wordIndex].substr(0, wrote.length)) {
        this.typingProcess[this.wordIndex].status = "right";
      } else {
        this.typingProcess[this.wordIndex].status = "wrong";
      }

      if (letterIndex !== -1) {
        wrote[letterIndex] === this.words[this.wordIndex][letterIndex] ?
          this.typingProcess[this.wordIndex].letters[letterIndex] = true :
          this.typingProcess[this.wordIndex].letters[letterIndex] = false;
      }

      
    } else {
      this.formGroup.controls['wrote'].setValue(wrote.substr(0, this.words[this.wordIndex].length));
    }
  }

  onSpace() {
    if (this.currentWrote.length === this.words[this.wordIndex].length) {
      this.wordIndex++;
      this.letterIndex = 0;
      this.setCurrentWrote('');
    }

    let result = document.getElementsByClassName("word-" + this.wordIndex) as HTMLCollection;
    for (let i=0; i < result.length; i++) {
      const spanElement = result.item(i) as HTMLSpanElement;
      console.log(spanElement.offsetTop);
      console.log('on space botton clicked scrollTop:' + spanElement.scrollTop);
      let box =  (document.getElementsByClassName("typing-box") as HTMLCollection)[0] as HTMLDivElement;
      let inp =  (document.getElementsByClassName("inp_text") as HTMLCollection)[0] as HTMLInputElement;
      console.log('on space botton clicked scrollTop:' + box.scrollTop);
      inp.style.top = spanElement.offsetTop+'px';
      box.scrollTop = spanElement.offsetTop;
    }
  }

  onBackspace() {
    if (this.typingProcess[this.wordIndex].letters.length === 0) {
      this.wordIndex > 0 ? this.wordIndex-- : this.wordIndex = 0;
      this.letterIndex = 0;
      if (this.wordIndex === 0) {
        if (this.typingProcess[this.wordIndex].letters.length === 0) {
          this.setCurrentWrote('');
        } else {
          this.setCurrentWrote(this.words[this.wordIndex])
        }
      } else {
        this.setCurrentWrote(this.words[this.wordIndex])
      }
    } else {
      if (this.currentWrote.length < this.words[this.wordIndex].length) {
        this.typingProcess[this.wordIndex].letters = this.typingProcess[this.wordIndex].letters.slice(0, this.currentWrote.length);
      }
    }
  }

  get currentWrote() {
    return this.formGroup.controls['wrote'].value;
  }

  setCurrentWrote(text) {
    this.formGroup.controls['wrote'].setValue(text);
  }

  getStatus() {
    const status = {missedWord: 0, missedLetter: 0};
    status.missedWord = this.typingProcess.filter(process => process.status === 'wrong').length;
    this.typingProcess.filter(process => process.status === 'wrong').forEach(process => {
      status.missedLetter += process.letters.filter(letter => letter === false).length;
    });
    return status;
  }

  getbackfocus(e: any) {
    e.target.focus();
  }
  
  updateTimer() {
    console.log('test 1s');
    //console.log('test 1s');
    //console.log('test 1s');
    console.log(this.timeLimit > 0);
    console.log(this.timeLimit);
    if (this.timeLimit > 0) {	// run backwards if there is a time limit
			this.minutes = Math.floor((this.timeLimit - this.seconds)/60);
			this.seconds = this.timeLimit - this.seconds - (this.minutes * 60);
			if (this.timeLimit > this.seconds) {
        this.strTime = this.minutes + ":" + this.seconds;
			} else {
				this.strTime = "time out";
			}
		} else {
			this.minutes = Math.floor(this.seconds/60);
			this.seconds = this.seconds-(this.minutes*60);
      this.strTime = this.minutes +":"+ this.seconds;
      this.seconds +=1;
		}
		// if (this.seconds > 5) {
		// 	this.win.Ext.fly("wpm").dom.innerHTML = this.calculateSpeed(this.characters, this.seconds, this.errors);
		// 	var speedLimit = this.exercises[this.exerciseNum].speedLimit;
		// 	if (speedLimit > 0) {
		// 		this.win.Ext.fly("wpm").dom.innerHTML = this.win.Ext.fly("wpm").dom.innerHTML + " / " + speedLimit;
		// 	}
		// 	this.win.Ext.fly("pro").dom.innerHTML = (isNaN(acc) || acc == Number.POSITIVE_INFINITY || acc == Number.NEGATIVE_INFINITY)?100:acc;
		// }
    var acc = 100-Math.round((this.errors/this.characters)*100);

    //throw new Error("Method not implemented.");
  }

}
