import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BorrowComponent } from "./borrow.component";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';


const BORROW_COMPONENT = [{ path: "", component: BorrowComponent }];

@NgModule({
  declarations: [BorrowComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forChild(BORROW_COMPONENT),
    FormsModule,
  ]
})
export class BorrowModule { }
