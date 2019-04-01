import { BrowserModule } from '@angular/platform-browser';
import{RepositoryService} from './repository.service'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

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
