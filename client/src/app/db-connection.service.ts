import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ListItem } from './types';

@Injectable({
  providedIn: 'root',
})
export class DbConnectionService {
  constructor(private http: HttpClient) {}

  getListItems() {
    return this.http.get<ListItem[]>('http://localhost:3000/getList');
  }

  deleteListItem(id: string) {
    return this.http.delete(`http://localhost:3000/deleteItem/${id}`);
  }
}
