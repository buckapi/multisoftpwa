import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacitacionesRoutingModule } from './capacitaciones-routing.module';
import { CapacitacionesComponent } from './capacitaciones.component';


@NgModule({
  declarations: [
    CapacitacionesComponent
  ],
  imports: [
    CommonModule,
    CapacitacionesRoutingModule
  ]
})
export class CapacitacionesModule { }
