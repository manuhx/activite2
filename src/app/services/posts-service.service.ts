import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private postsList: Post[];

  postsSubject = new Subject<Post[]>();

  constructor() {
    this.init();
  }

  emitPosts() {
    this.postsSubject.next(this.postsList);
  }

  createNewPost(post: Post) {
    this.postsList.push(post);
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.postsList.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.postsList.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  getSinglePost(index: number): Post {
    return this.postsList[index];
  }

  private init() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
      'tempor incididunt ut labore et dolore magna aliqua.' +
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.postsList = [
      new Post('Mon premier post', content),
      new Post('Mon deuxième post', content),
      new Post('Encore un post', content)
    ];
  }
}
