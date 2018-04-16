import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule, MatTableModule, MatNativeDateModule, MatButtonModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [

    // Browser
    BrowserModule,
    BrowserAnimationsModule,

    // Common
    CommonModule,

    // Material
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
