import { Injectable } from '@angular/core';
import{Repository} from './repository';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
baseUrl:string="https://api.github.com/"
  constructor(private http:HttpClient) { }
  getUsers(UsersName:string): Observable<Repository[]>{
    return this.http.get<Repository[]>(this.baseUrl+'users/'+UsersName+'/repos?access_token='+environment.token)
  }
}
