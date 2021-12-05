import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkUniquenessValidator } from 'src/app/core/validators/checkUniquenessValidator';
import { createPasswordStrengthValidator } from 'src/app/core/validators/createPasswordStrengthValidator';
import { environment } from 'src/environments/environment';

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

  constructor(private http: HttpClient,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(
      'sainaa',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          checkUniquenessValidator(),
      ]}),
      password: new FormControl(
        'Sainzaya12345',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120),
            createPasswordStrengthValidator()
        ]}),
      re_password: new FormControl(
        'Sainzaya12345',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]}),
      email: new FormControl(
        'Sainzaya@example.com',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]})
    });
  }

  onSubmit(event) {
    // TODO: Use EventEmitter with form value
    const body = {
      username: this.regForm.get('username').value,
      email: this.regForm.get('email').value,
      password: this.regForm.get('password').value,
      re_password: this.regForm.get('re_password').value
    }

    //this.regForm.get('username').setErrors({validateUniqueness: true, message: 'This username already exists. Please try a different username.'});
//var pL = this;
    this.http.post(`${environment.api_url}/register-student`, body).subscribe(res => {
      //console.log(res);
      //this.regForm.get('username').setErrors({validateUniqueness: true, message: 'This username already exists. Please try a different username.'});
      // if(res['valid'] != undefined && res['valid'] == false) {
        for (var _i = 0; _i < res['errors'].length; _i++) {
          console.log(_i);
          console.log(res['errors'][_i]['field']);
          console.log(res['errors'][_i]['message']);
          this.regForm.get(res['errors'][_i]['field']+'').setErrors({validateUniqueness: true, message: 'This username already exists. Please try a different username.'});
          //pL.regForm.get(res['errors'][_i]['field']).setErrors({validateUniqueness: true, message: res['errors'][_i]['message']});
        }
      // }
      //this.router.navigateByUrl('/student/login');
    });
  }

}
