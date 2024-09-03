import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 //Some of these components are commented out in app.component.html

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { EachtoDoComponent } from './eachto-do/eachto-do.component';
// import { FetchComponent } from './dataFetching/fetch/fetch.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { FetchDataService } from './fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EachtoDoComponent,
    // FetchComponent,
    DisplayDataComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
