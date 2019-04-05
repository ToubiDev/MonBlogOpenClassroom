import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model.';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;
  @Input()
  indexPost: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  augmenteLoves(){
    this.postsService.augmenteNbLoveits(this.indexPost);
  }

  diminueLoves(){
    this.postsService.diminueNbLoveits(this.indexPost);
  }

  onRemove(post){
    this.postsService.removePost(post);
    this.postsService.emitPosts();
  }
}
