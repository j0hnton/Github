import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{Repository} from './repository';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment'

@Injectable({
 providedIn: 'root'
})

export class RepositoryService {
baseUrl:string="https://api.github.com/"
 constructor(private http:HttpClient) { }
 getRepos(UserName:string): Observable<Repository[]>{
   return this.http.get<Repository[]>(this.baseUrl+'users/'+UserName+'/repos?access_token='+environment.token)
 };
 getUsers(UserName:string): Observable<Repository[]>{

      return this.http.get<Repository[]>(this.baseUrl+'users/'+UserName+'?access_token='+environment.token)

}
}
