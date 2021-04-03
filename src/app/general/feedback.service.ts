import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
// import {  throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Feed } from './feed';

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {

  baseURL = "https://beta.9brainz.store/api/technology_master";

  errorData: {} | any;

  constructor(private http: HttpClient) { }


  getFeedback(): Observable<Feed> {
    return this.http
      .get<Feed>("https://beta.9brainz.store/api/testimonial")
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
