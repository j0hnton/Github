import { Injectable } from '@angular/core';
import{Repository} from './repository';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http'
@Injectable({
 providedIn: 'root'
})
export class RepositoryService {
baseUrl:string="https://api.github.com/"
 constructor(private http:HttpClient) { }
 getRepos(UserName:string): Observable<Repository[]>{
   return this.http.get<Repository[]>(this.baseUrl+'users/'+UserName+'/repos')
 }
}
