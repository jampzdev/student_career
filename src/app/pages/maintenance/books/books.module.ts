import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BooksComponent } from "./books.component";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

const BOOKS_COMPONENT = [{ path: "", component: BooksComponent }];

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forChild(BOOKS_COMPONENT),
    FormsModule,
  ]
})
export class BooksModule { }
