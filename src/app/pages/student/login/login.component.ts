import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) {
   }

  ngOnInit(): void {
  }

  login() {
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
