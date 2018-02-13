import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

// home component
@Component({
  selector: 'app-home',
  template: `
    <p>This is home component</p>
    <!-- <button routerLinkActive="active" routerLink="page1">Page 1</button>
    <button routerLinkActive="active" routerLink="page2">Page 2</button>
    <button routerLinkActive="active" routerLink="page3">Page 3</button> -->
    <div style="border: 1px solid red">
      <router-outlet></router-outlet>
    </div>
  `
})
export class HomeComponent{

}

const routes : Route[] = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'home',
  component: HomeComponent,
  children: [{
    path: 'page1',
    component: HomeChildComponent
  },{
    path: 'page2',
    component: PageTwoComponent
  },{
    path:'page3',
    component: PageThreeComponent
  }]
},{
  path: 'about/:name',
  component: AboutComponent,
  children: [{
    path: '2',
    component: PageTwoComponent
  },{
    path: '3',
    component: PageThreeComponent
  }]
},{
  path: 'contact',
  component: ContactComponent
},{
  path: 'admin',
  loadChildren: './admin.module#AdminModule'
}]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildComponent,
    AboutComponent,
    ContactComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
