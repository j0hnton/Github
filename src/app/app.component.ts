import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import{Observable} from 'rxjs';
import{Repository} from './repository';
import {RepositoryService} from './repository.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
 userName:string="j0hnton"
 Repos:Repository[]=[]

 loading:boolean=false;
 errorMessage;
constructor(private repositoryService:RepositoryService){
}
public getRepos(){
 this.loading=true;
 this.errorMessage="";
       this.repositoryService.getRepos(this.userName)
           .subscribe((response) => {this.Repos=response;},
           (error) => {this.errorMessage=error; this.loading=false; },
           () => {this.loading=false;})
   }
}
