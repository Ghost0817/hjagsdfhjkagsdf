import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
   }

  ngOnInit(): void {
  }

}
