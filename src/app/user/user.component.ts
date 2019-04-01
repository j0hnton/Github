import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{Users} from '../user';
import {UsersService} from '../user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UsersService]
})
export class UserComponent implements OnInit {
  userName:string=""
  user:Users[]=[]

  loading:boolean=false;
  errorMessage;
constructor(private userService:UsersService){
}
public getUsers(){
  this.loading=true;
  this.errorMessage="";
        this.userService.getUsers(this.userName)
            .subscribe((response) => {this.user=response;},
            (error) => {this.errorMessage=error; this.loading=false; },
            () => {this.loading=false;})
    }
    ngOnInit() {
}
}
