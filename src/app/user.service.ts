import { Injectable } from '@angular/core';
import{Users} from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseUrl:string="https://api.github.com/"
  constructor(private http:HttpClient) { }
  getUsers(UsersName:string): Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl+'users/'+UsersName+'?access_token='+environment.token)
  }
}
