import { NgModule,      } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppRoutingModule,   } from './app-routing.module';
import { AppComponent,       } from './app.component';
import { TodoListTaskModule, } from './todo-list-task';
import { TodoModule,         } from './todo-list';

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
export class AppModule {
}
