import { Component, Input } from '@angular/core';

import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: 'This is my first post'},
  //   { title: 'Second Post', content: 'This is my second post'},
  //   { title: 'Third Post', content: 'This is my third post'}
  // ]
  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) {}
}
