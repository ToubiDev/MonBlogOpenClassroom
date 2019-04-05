import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../post.model.';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  postsSubject = new Subject<any[]>();
  posts: Post[] = [
    new Post('Mon premier post','ici le contetu du post blalala',0,new Date()),
    new Post('Mon deuxieme post','ici le contetu du post blalala',2,new Date()),
    new Post('Mon troisieme post','ici le contetu du post blalala',-2,new Date())
  ];

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  augmenteNbLoveits(i: number){
    this.posts[i].loveIts++;
    this.emitPosts();
  }

  diminueNbLoveits(i: number){
    this.posts[i].loveIts--;
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

}
