import { Component, OnInit } from '@angular/core';
import { ServiceForInterceptor } from '../services/service-for-interceptor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private interceptorServ:ServiceForInterceptor) { }

  ngOnInit() {
  }

  fetch(){
    this.interceptorServ.fetch()
      .subscribe(data => console.log(data))
  }

}
