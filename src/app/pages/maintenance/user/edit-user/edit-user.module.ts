import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { EditUserComponent } from "./edit-user.component";

const EDITUSER_ROUTE = [{ path: "", component: EditUserComponent }];

@NgModule({
    declarations: [EditUserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(EDITUSER_ROUTE),
    ]
})
export class EditUserModule { }
