import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(private titleService: Title,private meta: Meta) {
    this.titleService.setTitle( 'Learn to Type | Free Typing Tutor | Typing Course - localhost' );
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });
  }

  ngOnInit(): void {
  }

}
