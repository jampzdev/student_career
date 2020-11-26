import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ListUserComponent } from "./list-user.component";

const LISTUSER_ROUTE = [{ path: "", component: ListUserComponent }];

@NgModule({
    declarations: [ListUserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(LISTUSER_ROUTE),
    ]
})
export class ListUserModule { }
