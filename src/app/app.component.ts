import {Component, Input} from '@angular/core';
import {Post} from './post.model.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('Mon premier post','ici le contetu du post blalala',0,new Date()),
    new Post('Mon deuxieme post','ici le contetu du post blalala',2,new Date()),
    new Post('Mon troisieme post','ici le contetu du post blalala',-2,new Date())
  ];
}
