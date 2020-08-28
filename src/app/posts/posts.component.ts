import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppErrors } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts : any[];
 
  constructor(private service:PostService) {

  }

  createPost(input:HTMLInputElement){
    let newPost = {title:<string>input.value};
    this.posts.unshift(newPost);

    input.value = '';

    this.service.create(JSON.stringify(newPost))
      .subscribe(
        post => {
          newPost['id'] = post['id'];
        }, 
        (error:AppErrors) => {
          this.posts.shift();
          if(error instanceof NotFoundError)
            alert('This post has already deleated!');
          else throw error; 
      }) 
  }

  updatePost(post){
    post['isRed'] = true;
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost))
  }

  deletePost(post){
    let postIndx = this.posts.indexOf(post);
    this.posts.splice(postIndx,1);

    this.service.delete(post.id)
      .subscribe(
        deleatedPost => console.log('Post get deleted!'), 

        (error:AppErrors) => {
          this.posts.splice(postIndx, 0, post);

          if(error instanceof NotFoundError)
            alert('This post has already deleated!');

          else throw error;
      })
  }

  ngOnInit(){
      this.service.getAll()
      .subscribe(
        posts => this.posts = posts,

        (error:AppErrors) => {
        if(error instanceof NotFoundError)
          alert('Post location is wrong!');
        else throw error;
    })
  }
}
