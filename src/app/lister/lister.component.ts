import { Component, OnInit } from '@angular/core';
import { LambdaServiceService } from '../lambda-service.service';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {

  constructor(private LambdaService : LambdaServiceService) { }
  public tOutput;
  public rOutput;
  ngOnInit() {
    this.tOutput = this.LambdaService.getList();
    console.log("got it f: " + this.tOutput);
    // console.log(this.tOutput);
    this.rOutput = Object.values(this.tOutput);
    console.log ("rOutput: " + this.rOutput);
  }

}
