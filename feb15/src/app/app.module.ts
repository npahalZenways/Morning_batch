import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyService } from "./myservice";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyPipe } from "./mypipe";
import { FormsModule } from "@angular/forms";
import { MyDirective } from "./MYDIRECTIVE";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyPipe,
    MyDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
