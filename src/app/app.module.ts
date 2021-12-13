import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
// import { ContactComponent } from './modules/general/contact/contact.component';
// import { AboutComponent } from './modules/general/about/about.component';
// import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ItemsComponent } from './modules/application/items/items.component';
import { ItemsModule } from './modules/application/items/items.module';
// import { HttpclientComponent } from './modules/application/httpclient/httpclient.component';
import { HttpclientModule } from './modules/application/httpclient/httpclient.module';
// import { ContactModule } from './modules/general/contact/contact.module';
// import { SigninModule } from './modules/general/signin/signin.module';
// import { AboutModule } from './modules/general/about/about.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ItemsComponent,
    // ContactComponent,
    // AboutComponent,
    // SigninComponent,
    // NotFoundComponent,
    // HttpclientComponent
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-seo' }),
    AppRoutingModule,
    // ItemsModule,
    HttpclientModule,
    // ContactModule,
    // SigninModule,
    // AboutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
