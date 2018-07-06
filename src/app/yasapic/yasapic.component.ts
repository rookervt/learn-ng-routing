import { Component, OnInit } from '@angular/core';
import { YasapisService } from '../yasapis.service';

@Component({
  selector: 'app-yasapic',
  templateUrl: './yasapic.component.html',
  styleUrls: ['./yasapic.component.css']
})
export class YasapicComponent implements OnInit {

  private  samplePosts:  Array<object> = [];

  constructor(private apiService: YasapisService) { }

  ngOnInit() {
    this.getSamplePosts();
  }

  public getSamplePosts() {
    this.apiService.getPosts().subscribe((data: Array<object>) => { this.samplePosts = data;
      console.log(data);
    });
  }

}
