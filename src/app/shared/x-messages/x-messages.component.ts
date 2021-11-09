import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-messages',
  templateUrl: './x-messages.component.html',
  styleUrls: ['./x-messages.component.scss']
})
export class XMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: Event) { 
    console.log('Click!', event) 
  } 

}
