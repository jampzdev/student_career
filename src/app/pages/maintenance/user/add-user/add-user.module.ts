import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user.component";

const ADDUSER_ROUTE = [{ path: "", component: AddUserComponent }];

@NgModule({
    declarations: [AddUserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ADDUSER_ROUTE),
    ]
})
export class AddUserModule { }
