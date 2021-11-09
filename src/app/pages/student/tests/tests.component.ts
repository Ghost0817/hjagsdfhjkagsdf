import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { tests } from 'src/app/core/constants/tests';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  cateroties = [];
  currLng = "";
  filmIcon = faFilm;

  constructor(private titleService: Title,private meta: Meta,private activatedRoute: ActivatedRoute,private api: ApiService) {
    this.titleService.setTitle( 'Free Typing Test - Bicheech.com' );
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });
    this.currLng = "ENGLISH";
    // this.api.get('/api/studentlessons').subscribe(response => {
    //   this.cateroties = [
    //     {
    //       enTitle:"Timed Tests",
    //       mnTitle:"Хугацаатай Сорилтууд",
    //       slug:"timed-tests",
    //       lessons: [{
    //         enTitle:"1:00 Test",
    //         mnTitle:"1:00 Сорилт",
    //         slug:"1-minute",
    //         enBttnLbl:"1 Minute Typing Test",
    //         mnBttnLbl:"1 Минут Бичих Сорилт"
    //       },{
    //         enTitle:"3:00 Test",
    //         mnTitle:"3:00 Сорилт",
    //         slug:"3-minute",
    //         enBttnLbl:"3 Minute Typing Test",
    //         mnBttnLbl:"3 Минут Бичих Сорилт"
    //       },{
    //         enTitle:"5:00 Test",
    //         mnTitle:"5:00 Сорилт",
    //         slug:"5-minute",
    //         enBttnLbl:"5 Minute Typing Test",
    //         mnBttnLbl:"5 Минут Бичих Сорилт"
    //       }]
    //     },{
    //       enTitle:"Page Tests",
    //       mnTitle:"Хуудасны Сорилтууд",
    //       slug:"page-tests",
    //       lessons: [{
    //         enTitle:"1 Page Test",
    //         mnTitle:"1 Хуудасны Сорилт",
    //         slug:"1-page",
    //         enBttnLbl:"1 Page Typing Test",
    //         mnBttnLbl:"1 Хуудасны Бичих Сорилт"
    //       },{
    //         enTitle:"2 Page Test",
    //         mnTitle:"2 Хуудасны Сорилт",
    //         slug:"2-page",
    //         enBttnLbl:"2 Page Typing Test",
    //         mnBttnLbl:"2 Хуудасны Бичих Сорилт"
    //       },{
    //         enTitle:"3 Page Test",
    //         mnTitle:"3 Хуудасны Сорилт",
    //         slug:"3-page",
    //         enBttnLbl:"3 Page Typing Test",
    //         mnBttnLbl:"3 Хуудасны Бичих Сорилт"
    //       }]
    //     }
    //   ];
    // })

    this.cateroties = [
      {
        enTitle:"Timed Tests",
        mnTitle:"Хугацаатай Сорилтууд",
        slug:"timed-tests",
        lessons: [{
          enTitle:"1:00 Test",
          mnTitle:"1:00 Сорилт",
          slug:"1-minute",
          enBttnLbl:"1 Minute Typing Test",
          mnBttnLbl:"1 Минут Бичих Сорилт"
        },{
          enTitle:"3:00 Test",
          mnTitle:"3:00 Сорилт",
          slug:"3-minute",
          enBttnLbl:"3 Minute Typing Test",
          mnBttnLbl:"3 Минут Бичих Сорилт"
        },{
          enTitle:"5:00 Test",
          mnTitle:"5:00 Сорилт",
          slug:"5-minute",
          enBttnLbl:"5 Minute Typing Test",
          mnBttnLbl:"5 Минут Бичих Сорилт"
        }]
      },{
        enTitle:"Page Tests",
        mnTitle:"Хуудасны Сорилтууд",
        slug:"page-tests",
        lessons: [{
          enTitle:"1 Page Test",
          mnTitle:"1 Хуудасны Сорилт",
          slug:"1-page",
          enBttnLbl:"1 Page Typing Test",
          mnBttnLbl:"1 Хуудасны Бичих Сорилт"
        },{
          enTitle:"2 Page Test",
          mnTitle:"2 Хуудасны Сорилт",
          slug:"2-page",
          enBttnLbl:"2 Page Typing Test",
          mnBttnLbl:"2 Хуудасны Бичих Сорилт"
        },{
          enTitle:"3 Page Test",
          mnTitle:"3 Хуудасны Сорилт",
          slug:"3-page",
          enBttnLbl:"3 Page Typing Test",
          mnBttnLbl:"3 Хуудасны Бичих Сорилт"
        }]
      }
    ];
  }

  ngOnInit(): void {
  }

  getLessons(langauge: string) {
    this.currLng = langauge;
  }

}
