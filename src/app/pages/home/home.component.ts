import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title,private meta: Meta) {
    this.titleService.setTitle( 'Tests - localhost' );
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });
  }

  ngOnInit(): void {
  }

}
