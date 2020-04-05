import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoserviceService {

  constructor(private http: HttpClient) { }

  insertInfo(infodata) {
    this.http.post('http://localhost:3000/fileInfo', infodata);
  }
}
