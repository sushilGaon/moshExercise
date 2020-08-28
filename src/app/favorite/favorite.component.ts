import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  @Input('isFavorite') isSelected = false;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  
  onStarClick(){
    this.isSelected = !this.isSelected;
    this.click.emit(this.isSelected);
  }

}
