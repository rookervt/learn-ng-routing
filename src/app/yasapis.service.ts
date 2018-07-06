import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YasapisService {

  // Yasapis = "Yet Another Simple Api Service"

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/posts";  // Method 1 & Method 2 & Method 3 & Method 4 and Method 5

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
      return  this.httpClient.get(this.ROOT_URL);
  }

}
