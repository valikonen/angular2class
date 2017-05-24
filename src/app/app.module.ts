import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, providers } from './index';
import { Main, Notes } from './containers/index';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './ui/index';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    AppBar,
    Notes,
    NoteCard,
    NoteCreator,
    ColorPicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ providers ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
