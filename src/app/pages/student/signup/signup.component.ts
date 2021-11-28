import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public regForm!: FormGroup;

  public passwordType: string = 'password';

  get emailField () {
    return this.regForm.get('email');
  }
  get usernameField () {
    return this.regForm.get('username');
  }



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
      ]}),
      password: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]}),
      re_password: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]}),
      email: new FormControl(
        'ssasdasd',
        {
          validators: [
            Validators.required,
            //UniversalValidators.noEmptyString,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]})
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm);
  }

}
