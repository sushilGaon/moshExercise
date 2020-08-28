import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moshExercise';
  post = {
    title:'Title',
    isFavorite:true,
  }

  onFavoriteChange(isFavorite:boolean){
    this.post.isFavorite  = isFavorite;
    console.log(this.post.isFavorite )
  }
}
