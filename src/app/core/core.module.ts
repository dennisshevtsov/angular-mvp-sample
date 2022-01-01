import { NgModule,     } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { ModalComponent, } from './components';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class CoreModule { }
