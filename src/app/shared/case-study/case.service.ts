import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Case } from './case';
// import { ProjectMaster } from './project-master';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  errorData: {} | any;

  // ServerUrl = "https://beta.9brainz.store/api/project_master/featured";


  constructor(private http:HttpClient) { }

  getFeatured(): Observable<Case> {
    return this.http
      .get<Case>("https://beta.9brainz.store/api/project_masters/featured")
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
