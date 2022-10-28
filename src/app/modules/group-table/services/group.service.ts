import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private groupsUrl  = 'api/groups'; 
  public data: any;

  constructor(
    private http: HttpClient,
  ) { }

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.groupsUrl );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
