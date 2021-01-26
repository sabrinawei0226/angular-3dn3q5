import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitleComponent } from './title/title.component';
import { AccountComponent } from './account/account.component';
import { BtnLoginComponent } from './btn-login/btn-login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TitleComponent, AccountComponent, BtnLoginComponent ],
  bootstrap:    [AppComponent]
})
export class AppModule { }
