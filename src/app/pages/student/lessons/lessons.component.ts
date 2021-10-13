import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  cateroties = [];
  currLng = "";
  currCtgry = "";
  currLsn = ""


  constructor(private titleService: Title,private meta: Meta,private activatedRoute: ActivatedRoute,private api: ApiService) {
    this.titleService.setTitle( 'Learn to Type | Free Typing Tutor | Typing Course - localhost' );
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });

    this.currLng = "ENGLISH";
    this.currCtgry = "BEGINNER_COURSE";

    this.api.get('/api/studentlessons').subscribe(response => {
      this.cateroties = response;
    })
  }

  ngOnInit(): void {
  }

  getLessons(langauge: string) {
    this.currLng = langauge;
    console.log(langauge);
    this.api.get('/api/studentlessons').subscribe(response => {
      console.log(response);
    })
  }

  openLesson(c: string) {
    if(this.currCtgry === c) {
      if(this.currCtgry === "") {
        this.currCtgry = c;
      } else {
        this.currCtgry = "";
      }
    } else {
      this.currCtgry = c;
    }
  }

}
