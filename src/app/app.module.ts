import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CdkTableModule} from '@angular/cdk/table'; 
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const ComponentDevKit_Modules = [
	CdkTableModule
];

const Material_Modules = [
       MatButtonModule,
       MatCheckboxModule
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
