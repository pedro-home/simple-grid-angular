import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule, MatTableModule, MatNativeDateModule, MatButtonModule, MatInputModule, MatSortModule } from '@angular/material';

import { HttpModule } from '@angular/http';

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
    FormsModule,
    

    // Services
    HttpModule,

    // Material
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
