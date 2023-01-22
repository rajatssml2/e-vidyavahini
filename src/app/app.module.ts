import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PublicHeaderComponent } from './components/public/public-header/public-header.component';
import { PublicFooterComponent } from './components/public/public-footer/public-footer.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component'


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';

import {SharedModule} from './modules/shared/shared.module';
import { PrivateHeaderComponent } from './components/private/common/private-header/private-header.component';
import { CommonHeaderComponent } from './components/common/common-header/common-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicComponent,
    PrivateComponent,
    PublicHomeComponent,
    LoginComponent,
    PrivateHeaderComponent,
    CommonHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      closeButton: true,
    }),
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SlickCarouselModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
