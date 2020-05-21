import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  cateroties = [];
  filmIcon = faFilm;

  constructor(private titleService: Title,private meta: Meta,private activatedRoute: ActivatedRoute,private api: ApiService) {
    this.titleService.setTitle( 'Tests - localhost' );
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });
    this.api.get('/api/studentlessons').subscribe(response => {
      this.cateroties = response;
    })
  }

  ngOnInit(): void {
  }

  getLessons(langauge: string) {
    console.log(langauge);
    this.api.get('/api/studentlessons').subscribe(response => {
      console.log(response);
    })
  }

}
