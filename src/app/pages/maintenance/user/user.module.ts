import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user.component";
import { UserRouting } from "./user.routing";

const USER_ROUTE = [{ path: "", component: UserComponent }];

@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        UserRouting,
    ]
})
export class UserModule { }
