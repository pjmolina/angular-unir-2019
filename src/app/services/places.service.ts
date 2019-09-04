import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../domain/place';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  urlBase = 'https://openapi3.herokuapp.com/api/places';
  user = 'demo';
  password = 'demo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: getBasicAuth(this.user, this.password)
      }
    };

    return this.http.get(this.urlBase, options).pipe(
      map(d => toPlaces(d) )
    );
  }

  // getById
  // create
  // update
  // delete

}

function toPlaces(array: any): Place[] {
  return array as Place[];
}

function toPlace(obj: any): Place {
  return obj as Place;
}


function getBasicAuth(user: string, password: string): string {
  return 'Basic ' + btoa(user + ':' + password);
}

