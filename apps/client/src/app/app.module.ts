import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lib1Module } from '@jest-nx-build-dependencies/lib1';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
