import { NgModule,      } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppComponent,       } from './app.component';
import { AppRoutingModule,   } from './app-routing.module';
import { TodoModule,         } from './todo-list';
import { TodoListTaskModule, } from './todo-list/task';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
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
