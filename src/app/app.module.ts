import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdFormComponent } from './std-form/std-form.component';
import { StdTableComponent } from './std-table/std-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Std2FormComponent } from './std2-form/std2-form.component';
import { Std2TableComponent } from './std2-table/std2-table.component';
import { Std3FormComponent } from './std3-form/std3-form.component';
import { Std3TableComponent } from './std3-table/std3-table.component';
import { Std4TableComponent } from './std4-table/std4-table.component';
import { Std4FormComponent } from './std4-form/std4-form.component';
import { Std5FormComponent } from './std5-form/std5-form.component';
import { Std5TableComponent } from './std5-table/std5-table.component';



@NgModule({
  declarations: [
    AppComponent,
    StdFormComponent,
    StdTableComponent,
    Std2FormComponent,
    Std2TableComponent,
    Std3FormComponent,
    Std3TableComponent,
    Std4TableComponent,
    Std4FormComponent,
    Std5FormComponent,
    Std5TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
