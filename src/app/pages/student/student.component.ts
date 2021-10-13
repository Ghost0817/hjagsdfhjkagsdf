import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAccount(){
    console.log(localStorage.getItem('accessToken') != null );
    if(localStorage.getItem('accessToken') != null ){
      return true;
    } else {
      return false;
    }
  }

}
