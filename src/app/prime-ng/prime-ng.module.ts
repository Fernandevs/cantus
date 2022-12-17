import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
