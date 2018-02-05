import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { feb2Component } from "./Feb_2/feb2";
import { Feb5Component } from "./Feb_5/feb5";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    feb2Component,
    Feb5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
