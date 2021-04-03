import { HttpClient,HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Tech } from './tech';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  baseURL = "https://beta.9brainz.store/api/technology_master";

  errorData: {} | any;


  constructor(private http:HttpClient) { }

  getTechnology(): Observable<Tech> {
    return this.http
      .get<Tech>(this.baseURL)
      .pipe(catchError(this.handleError));
  }

  getTechnologyDetail(service_name : any){
    return this.http
      .get<Tech>('https://beta.9brainz.store/api/technology_master/' + service_name)
      .pipe(catchError(this.handleError));
  }

  getExpert(id:number){
    return this.http.get<Tech>("https://beta.9brainz.store/api/expertise_master/" + id)
    .pipe(catchError(this.handleError));
  }

  getProjectsMini(id : any): Observable<Tech> {
    return this.http
      .get<Tech>("https://beta.9brainz.store/api/technology_master/" + id)
      .pipe(catchError(this.handleError));
  }





  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: "Oops! Request for document failed",
      errorDesc: "Something bad happened. Please try again later.",
    };
    return throwError(this.errorData);
  }

}
