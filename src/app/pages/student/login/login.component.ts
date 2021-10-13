import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  username = "";
  password = "";
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient,
              private router: Router) {
   }

  ngOnInit(): void {
  }

  getError() {
    return false;
  }
  
  getGrade() {
    return false;
  }

  login() {
    console.log(this.emailFormControl.value);
    console.log(this.passwordFormControl.value);
    const body = {
      username: 'admin',
      password: 'admin',
      rememberMe: false
    }
    this.http.post(`${environment.api_url}/api/authenticate`, body).subscribe(res => {
      localStorage.setItem('accessToken', res['id_token']);
      this.router.navigateByUrl('/home');
    })
  }

}
