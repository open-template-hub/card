import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './component/template/template.component';

@NgModule( {
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent
  ]
} )
export class TemplateModule {
}
