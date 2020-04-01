import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import localfr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localfr);



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
