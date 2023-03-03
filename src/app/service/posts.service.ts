import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getusers():Observable<Posts[]>{
    return this.httpClient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
  
  }


}