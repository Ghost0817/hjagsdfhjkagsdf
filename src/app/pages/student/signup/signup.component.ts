import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  regForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      re_password: new FormControl(''),
      email: new FormControl('')
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm);
  }

}
