import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public regForm!: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient,
              private router: Router) {
   }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(
      'sainaa',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
      ]}),
      password: new FormControl(
        'foo',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]})
    });
  }

  getError() {
    return false;
  }
  
  getGrade() {
    return false;
  }

  login() {
    const body = {
      username: this.regForm.get('username').value,
      password: this.regForm.get('password').value
    }
    this.http.post(`${environment.api_url}/authenticate`, body).subscribe(res => {
      localStorage.setItem('accessToken', res['jwt']);
      this.router.navigateByUrl('/home');
    })
  }

}
