import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const USER_ROUTE: Routes = [
    {
        path: "",
        component: UserComponent,
        children: [
            {
                path: "",
                redirectTo: "list-user"
            },
            {
                path: "list-user",
                loadChildren: "./list-user/list-user.module#ListUserModule"
            },
            {
                path: "add-user",
                loadChildren: "./add-user/add-user.module#AddUserModule"
            },
            {
                path: "edit-user",
                loadChildren: "./edit-user/edit-user.module#EditUserModule"
            },
        ]
    }
];

export const UserRouting = RouterModule.forChild(USER_ROUTE);