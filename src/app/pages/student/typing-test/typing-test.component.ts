import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { contents } from 'src/app/core/constants/fake-content'
import { FormControl, FormGroup } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.scss']
})
export class TypingTestComponent implements OnInit {

  lessons = contents;
  speedType = 'wpm'
  typingProcess = [];
  testIndex = 0;
  wordIndex = 0;
  letterIndex = 0;
  words = [];
  formGroup: FormGroup;
  wrote = new FormControl("");

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService) {
    activatedRoute.params.subscribe(params => {
      console.log(params);
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
    });
  }

  ngOnInit(): void {
    this.testIndex = this.randomNumber(0, this.lessons.length - 1);
    this.words = this.lessons[this.testIndex].content.split(" ").map(word => {
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
    let box =  (document.getElementsByClassName("typing-box") as HTMLCollection)[0] as HTMLDivElement;
    console.log('on back to focus scrollTop:' + box.scrollTop);
    e.target.focus();
  }

}
