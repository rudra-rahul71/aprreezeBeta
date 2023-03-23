import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getSomething(): Observable<any> {
    return this.http.get<string>(encodeURI(env.dev.portalServiceUrl + "/api/private"))
    .pipe(
      catchError((error) => {
        return of({});
      })
    )
  }
}
