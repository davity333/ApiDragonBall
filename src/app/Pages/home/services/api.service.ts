import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, map} from 'rxjs/operators';

import { Apiinterface, Apiitems, Personajeitems } from '../models/apiinterface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private numeroId:number = 0;

  constructor(readonly httpClient:HttpClient) { }

  getAll(){
    let url = 'https://dragonball-api.com/api/characters';
    return this.httpClient.get<Apiitems>(url)
  }

  getCharacter(number:number){
    let url = `https://dragonball-api.com/api/characters/${number}`;
    return this.httpClient.get<Personajeitems>(url)
  }

  setId(id:number){
    this.numeroId = id;
  }

  getId(){
    return this.numeroId;
  }
}
