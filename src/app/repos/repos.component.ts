import { Component, OnInit} from '@angular/core';
import{Observable} from 'rxjs';
import{Repository} from '../repository';
import {RepositoryService} from '../repository.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers:[RepositoryService]
})
export class ReposComponent implements OnInit{
  userName:string=""
  Repos:Repository[]=[]

  loading:boolean=false
  errorMessage
constructor(private repositoryService:RepositoryService){
}
public getUsers(){
  this.loading=true;
  this.errorMessage="";
        this.repositoryService.getUsers(this.userName)
            .subscribe((response) => {this.Repos=response;},
            (error) => {this.errorMessage=error; this.loading=false; },
            () => {this.loading=false;})
    }
    ngOnInit() {
}
}
