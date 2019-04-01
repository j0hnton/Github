import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{RepositoryService} from './repository.service';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"user",component:UserComponent},
  {path:"repos",component:ReposComponent}
]
@NgModule({

  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
