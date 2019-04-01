import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{RepositoryService} from './repository.service'


@NgModule({

 declarations: [
   AppComponent,
 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule

 ],
 providers: [RepositoryService],
 bootstrap: [AppComponent]
})
export class AppModule { }
