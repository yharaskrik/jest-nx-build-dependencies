import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lib1Module } from '@jest-nx-build-dependencies/lib1';
import { Lib2Module } from '@jest-nx-build-dependencies/lib2';
import { Lib3Module } from '@jest-nx-build-dependencies/lib3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module, Lib3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
