import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { IPost, IPostFull } from './IPost';
import { PostService } from '../serivce/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit, OnDestroy {
  load = false;
  error:any = '';
  errorSubscription: Subscription;
  loadPost: IPost[] = [];
  constructor(private http: HttpClient, private postService: PostService) {}
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.errorSubscription = this.postService.error$.subscribe(
      (err) => (this.error = err)
    );
  }
  PostForm(form: NgForm) {
    console.log(form);
    console.log(form.value);
    /* this.http
    //   .post(
    //     'https://httpgroup-bfe14-default-rtdb.firebaseio.com/posts.json',
    //     form.value
    //   )
    //   .subscribe((ele) => {
    //     console.log(ele);
       });*/
    this.postService.PostForm(form.value);
  }
  getAllPosts() {
    this.load = true;
    /* this.http
    //   .get<IPostFull>(
    //     'https://httpgroup-bfe14-default-rtdb.firebaseio.com/posts.json'
    //   )
    //   .pipe(
    //     map((el: IPostFull) => {
    //       const arryPost = [];
    //       for (const key in el) {
    //         if (el.hasOwnProperty(key)) {
    //           arryPost.push({ ...el[key], id: key });
    //         }
    //       }
    //       return arryPost;
    //     })
    //   )
    //   .subscribe((ele) => {
    //     this.loadPost = ele;
    //     this.load = false;
       });*/
    this.postService.getAllPosts().subscribe(
      (ele: IPost[]) => {
        this.loadPost = ele;
        this.load = false;
      },
      (ele: Error) => {
        this.error = ele.message;
      }
    );
  }
  OnClearPosts() {
    this.postService.OnClearPosts().subscribe(() => {
      this.loadPost = [];
    });
  }
  OnHandleError() {
    this.error = null;
  }
}
