import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../../../services/api.service';
import { BaseComponent } from "../../../../base-component";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: [
        './list-user.component.scss',
        '../../../../../styles-ama-custom.scss'
    ]
})
export class ListUserComponent extends BaseComponent implements OnInit {
    //============================================
    // Variable Declarations (use_snake_case)
    //============================================
    user_list = [
        { "full_name": "Juan Dela Cruz1", "email": "test@gmail.com", "position": "Admin", "is_active": true, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
        { "full_name": "Juan Dela Cruz2", "email": "test@gmail.com", "position": "Admin", "is_active": false, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
        { "full_name": "Juan Dela Cruz3", "email": "test@gmail.com", "position": "Admin", "is_active": false, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
        { "full_name": "Juan Dela Cruz4", "email": "test@gmail.com", "position": "Admin", "is_active": true, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
    ]

    //============================================
    // Functions (useCamelCase)
    //============================================
    constructor(public injector: Injector, private http: Http, private API: ApiService) {
        super(injector);
    }

    ngOnInit() {
        this.getUserList()

        var test_global_function = this.testGlobalFunction()
        console.log("global var test: ", this.CURRENT_DATE)
        console.log("global func test: ", test_global_function)

        this.test()
    }

    /**
     * Author:          [Whole name of dev] ex: Catherine D. Aglipay
     * Description:     This function will get the list of users.
     * Date Created:    [Date created] ex: Apr 24, 2020
     */
    getUserList() {
        console.log("test: ", this.user_list) 
    }

    test(){
        this.API.post("/userlist")
        .subscribe(data => {

        },
            (error: any) => {
                console.log(error)
            }
        )
    }

}
