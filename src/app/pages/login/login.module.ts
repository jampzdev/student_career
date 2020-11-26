import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from "ngx-bootstrap";
import { InputFloatModule } from "../../directive/input-float/input-float.module";

const LOGIN_ROUTE = [{ path: "", component: LoginComponent }];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(LOGIN_ROUTE),
        BsDropdownModule.forRoot(),
        InputFloatModule,
        ModalModule.forRoot(),
        FormsModule,
    ]
})
export class LoginModule { }
