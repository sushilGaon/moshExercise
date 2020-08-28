import { Component, OnInit, ɵConsole } from '@angular/core';
import { FollowersService } from '../services/followers-service';

import { AppErrors } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { ActivatedRoute } from '@angular/router';
import {switchMap, map } from 'rxjs/operators';
import {combineLatest } from 'rxjs';




@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers = [];

  constructor(
    private route:ActivatedRoute,
    private service:FollowersService) { }

  ngOnInit() {
    //For getting multiple route params and route queries
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).pipe( switchMap ( 
            allRouteInfo => {
              console.log(allRouteInfo[0]);
              console.log(allRouteInfo[1]);
              //...assume route params are required to getAll srvice
              return this.service.getAll()
            }
            /*.pipe( map (
              followers => ({allRouteInfo, followers})
            ))*/
    )).subscribe(
      followers => {
       /* console.log(allRouteInfo[0]);
        console.log(allRouteInfo[1]);*/
        this.followers = followers
      
      },

      (error:AppErrors) => {
      if(error instanceof NotFoundError)
        alert('Post location is wrong!');
      else throw error;
  })
    //getting individual routeQuery params
    /*this.route.paramMap
    .subscribe(routeParam => {
      console.log(routeParam);
    })
    this.route.queryParamMap
      .subscribe(queryString => {
        console.log(queryString.get('page'));
    })*/

    
  }

}
