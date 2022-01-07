import { NgModule,     } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { ModalComponent, } from './components';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    ModalComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class CoreModule { }
