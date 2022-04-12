import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './component/card/card.component';

@NgModule( {
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
} )
export class CardModule {
}
