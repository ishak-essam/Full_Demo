import { Injectable } from '@angular/core';
import { IPost, IPostFull } from '../posts/IPost';
import { Subject, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error$ = new Subject<string>();
  url = 'https://httpgroup-bfe14-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}
  PostForm(form: IPost) {
    return this.http.post(this.url, form).subscribe({
      next: (data) => {},
      error: (ele: Error) => {
        this.error$.next(ele.message);
      },
    });
  }
  getAllPosts() {
    let searhParams = new HttpParams();
    searhParams=searhParams.append('Index', '20');
    searhParams=searhParams.append('Size', '10');
    return this.http
      .get<IPostFull>(this.url, {
        headers: new HttpHeaders({ token: 'asddasdasdsas' }),
        params: searhParams,
        
      })
      .pipe(
        map((el: IPostFull) => {
          const arryPost = [];
          for (const key in el) {
            if (el.hasOwnProperty(key)) {
              arryPost.push({ ...el[key], id: key });
            }
          }
          return arryPost;
        })
      );
  }
  OnClearPosts() {
    return this.http.delete(this.url);
  }
}
