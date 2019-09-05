import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../domain/place';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  urlBase = 'https://openapi3.herokuapp.com/api/places';
  user = 'demo';
  password = 'demo';

  cache: Place[] = null;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]> {
    if (this.cache) {
      return of(this.cache);
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: getBasicAuth(this.user, this.password)
      }
    };

    return this.http.get(this.urlBase, options).pipe(
      map(d => {
        const places = toPlaces(d);
        this.cache = places;
        return places;
      })
    );
  }

  getById(id: string): Observable<Place> {
    if (this.cache) {
      const found = this.cache.find(p => p._id === id);
      if (found) {
        return of(found);
      }
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: getBasicAuth(this.user, this.password)
      }
    };

    const url = this.urlBase + '/' + encodeURIComponent(id);

    return this.http.get(url, options).pipe(
      map(d => toPlace(d))
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

