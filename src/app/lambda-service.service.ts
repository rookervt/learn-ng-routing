import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class LambdaServiceService {
  readonly ROOTURL =
    "https://piij25075f.execute-api.us-east-2.amazonaws.com/prod/DynamoDBManager";

  constructor(private http: HttpClient) {}

  getList() {
    // let httpHeaders = new HttpHeaders().set("Accept", "application/json");

    return this.http
      .post(this.ROOTURL, {
        operation: "list",
        tableName: "LambdaTable",
        payload: {}
      })
      .subscribe(
        res => {
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        }
      );

  }
}
