import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Post } from "../post";  // Method 2 & Method 3
import { Observable } from "rxjs"; // Method 2 & Method 3
// import { map } from 'rxjs/operators';  // Method 6

@Component({
  selector: "app-barebones",
  templateUrl: "./barebones.component.html",
  styleUrls: ["./barebones.component.css"]
})

export class BarebonesComponent implements OnInit {

  // this test URL came from https://jsonplaceholder.typicode.com/
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/posts";  // Method 1 & Method 2 & Method 3 & Method 4 and Method 5

  // posts: any;  // method 1
  // posts: Observable<Post[]>; // Method 2 - use with this.http.get<Post[]>...., below. don't forget the import up above and Observable, too.
  posts: Observable<any>; // Method 3 & 4
  newPost: Observable<any>;  // Method 5

  constructor(private http: HttpClient) {}

  getPosts() {
    // first one
    // this.posts = this.http.get(this.ROOT_URL);  // Method 1

   // use this one for strong typing of the return
   // this.posts = this.http.get<Post[]>(this.ROOT_URL); // Method 2 - use with posts: Observable<Post[]>; above.


   let params = new HttpParams().set('userId','1'); // Method 3 using params class and Method 4
   // this.posts = this.http.get(this.ROOT_URL, { params });  // Method 3

   let headers = new HttpHeaders().set('Authorization','glib-73-bang'); // Method 4, using using an auth token in header.
   this.posts = this.http.get(this.ROOT_URL, { params, headers });  // Method 4 using both params and headers

  }

  // this function is for Method 5 & 6
  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My new post',
      body: 'Hey there glib.'
    }

    this.newPost = this.http.post(this.ROOT_URL, data);  // Method 5 - shows the whold post
    // this.newPost = this.http.post<Post>(this.ROOT_URL, data).map(post => post.title);  // method 6

  }

  ngOnInit() {}
}
