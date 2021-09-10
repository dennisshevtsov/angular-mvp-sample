import { NgModule,      } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppComponent,       } from './app.component';
import { AppRoutingModule,   } from './todo-list/routing';
import { TodoModule,         } from './todo-list';
import { TodoListTaskModule, } from './todo-list/task';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    TodoListTaskModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
