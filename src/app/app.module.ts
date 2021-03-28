import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { YellowcardListComponent } from './components/yellowcard-list/yellowcard-list.component';
import { DropdownDirective } from './components/shared/dropdown.directive';
import { HeaderInterceptorService } from './services/shared/header-interceptor.service';
import { MinutesplayedListComponent } from './components/minutesplayed-list/minutesplayed-list.component';
import { RedcardListComponent } from './components/redcard-list/redcard-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    YellowcardListComponent,
    MinutesplayedListComponent,
    RedcardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
