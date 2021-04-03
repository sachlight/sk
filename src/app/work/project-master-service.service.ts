import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ProjectMaster } from './project-master';

@Injectable({
  providedIn: 'root'
})
export class ProjectMasterServiceService {
  ServerUrl = "https://beta.9brainz.store/api/project_master";


  errorData: {} | any;

  constructor(private http:HttpClient) { }

  getProjectMaster(): Observable<any> {
    return this.http
      .get<any>(this.ServerUrl)
      .pipe(catchError(this.handleError));
  }

  getOneProject(id : any){
    return this.http
      .get<ProjectMaster>('https://beta.9brainz.store/api/project_master/' + id)
      .pipe(catchError(this.handleError));
  }

  getOneTechnology(id : any){
    return this.http
      .get<ProjectMaster>('https://beta.9brainz.store/api/technology_master/' + id)
      .pipe(catchError(this.handleError));
  }

  getAllTech(): Observable<ProjectMaster>{
    return this.http.get<ProjectMaster>('https://beta.9brainz.store/api/technology_master')
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
