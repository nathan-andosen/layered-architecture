import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class AjaxRequestService {


  get(url: string, headers: any) {

    const obs$ = ajax.getJSON(url, headers)
    .pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        console.log(err);
        throw err;
        // return of(err);
      })
    );

    return new Promise((resolve, reject) => {
      obs$.subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
    

  }

}
