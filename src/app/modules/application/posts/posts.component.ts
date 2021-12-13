import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private title:Title,
    private metaTagService:Meta
    ) { }

  ngOnInit(): void {
    this.title.setTitle('postspage');

    this.metaTagService.addTag(
      { name: 'description', content: 'view all posts' }
    );

  }

}
