import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`<h2>{{title | uppercase}}</h2>
              <p>{{text | summary }}</p>
              <span class="glyphicon glyphicon-star" [class.glyphicon-star-empty]="isDisabled"  (click)="onBtnClick()"></span>
              <ul><li *ngFor="let course of coursesList">{{course}}</li></ul>
              <img [src]="imgSrc"/>
              <input type="text" [(ngModel)]="myName" (keyup.enter)="onKeyup()" />
    `
})

export class CoursesComponent{
    title = 'My Courses List';
    text = 'The reason you cannot use [()] with a pipe is that pipes work only with one-way bindings. Therefore you must split out the pipe to only operate on the one-way binding and handle the event separately.'
    coursesList;
    imgSrc = 'assets/images/dummyImg.jpg';
    isDisabled = true;
    myName = "Sushil Gaonkar";

    onBtnClick(){
        this.isDisabled = !this.isDisabled;
    }
    onKeyup(){
        console.log(this.myName);
    }
    constructor(service:CoursesService){
        this.coursesList = service.getCourses();
    }
}