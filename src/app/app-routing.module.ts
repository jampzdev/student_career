import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Layout1Component} from "./layout/layouts/layout-1/layout.component";
import {Layout2Component} from "./layout/layouts/layout-2/layout.component";


const routes: Routes = [
    {
        // These are the pages WITH sidebar
        path: "user",
        component: Layout1Component,
        children: [
            // Dashboard
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                loadChildren: "./pages/dashboard/dashboard.module#DashboardModule"
            },


            // Maintenance
            {
                path: "maintenance/user",
                loadChildren: "./pages/maintenance/user/user.module#UserModule"
            },

            {
                path: "maintenance/books",
                loadChildren: "./pages/maintenance/books/books.module#BooksModule"
            },

            // Transactions
            {
                path: "transactions/borrow",
                loadChildren: "./pages/transactions/borrow/borrow.module#BorrowModule"
            },
        ]
    },
    {
        // These are the pages WITHOUT sidebar
        path: "",
        component: Layout2Component,
        children: [
            // {
            //     path: "",
            //     redirectTo: "index",
            //     pathMatch: "full"
            // },
            {
                path: "",
                loadChildren: "./pages/login/login.module#LoginModule",
                pathMatch: "full"
            },
            // {
            //     path: "404",
            //     loadChildren: "./pages/sample-pages/four-zero-four/four-zero-four.module#FourZeroFourModule"
            // },
            // {
            //     path: "**",
            //     redirectTo: "/404"
            // }
        ]
    },
    {
        path: "**",
        redirectTo: "#/404"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
