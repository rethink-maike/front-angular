import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../app/core/libs/material.module'
import { HttpClientModule } from '@angular/common/http';
import { TableCharactersComponent } from './table-characters/table-characters.component';
import { TableFilterCharactersComponent } from './table-filter-characters/table-filter-characters.component';
import { ModalCharactersComponent } from './modal-characters/modal-characters.component';
import { PaginatorService } from './../../core/services/paginator.service';

@NgModule({
  declarations: [
    HomeComponent,
    TableCharactersComponent,
    TableFilterCharactersComponent,
    ModalCharactersComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [
    PaginatorService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
