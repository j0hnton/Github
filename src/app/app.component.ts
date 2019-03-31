import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{User} from './user'
import{Repository} from './repository'
import{UserService} from './user.service';
import {RepositoryService} from './repository.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService, RepositoryService],
})
export class AppComponent {
  user: User;
  repository:Repository;
  constructor(userService:UserService, repositoryService:RepositoryService, private http:HttpClient){

  }
  ngOnInit(){
    interface ApiResponse{
      login:string,
      id:number,
      followers:number,
      following:number,
      name:string,
      node_id: string,
      licence: string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/LinusMuema").subscribe(data=>{
     this.user= new User (data.login, data.id, data.followers, data.following)
   })
  }
}
