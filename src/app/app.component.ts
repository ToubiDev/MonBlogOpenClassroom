import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post.model.';
import {Subscription} from 'rxjs';
import {PostsService} from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(){}

  ngOnInit() {

  }
}
