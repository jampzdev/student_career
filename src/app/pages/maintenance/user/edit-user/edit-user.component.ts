import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../../../services/api.service';
import { BaseComponent } from "../../../../base-component";
import { FormGroup, FormControl, Validators } from '@angular/forms';


import Swal from 'sweetalert2';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: [
        './edit-user.component.scss',
        '../../../../../styles-ama-custom.scss'
    ]
})
export class EditUserComponent extends BaseComponent implements OnInit {
    //============================================
    // Variable Declarations (use_snake_case)
    //============================================







    //============================================
    // Functions (useCamelCase)
    //============================================
    constructor(public injector: Injector, private http: Http, private API: ApiService) {
        super(injector);
    }
    ngOnInit() {
    }

    /**
     * Author:          [Whole name of dev] ex: Catherine D. Aglipay
     * Description:     This function will save the changes made in user.
     * Date Created:    [Date created] ex: Apr 24, 2020
     */
    updateUser() {
        Swal.fire({
            title: "Success!",
            text: "Test success message",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonColor: "#37368E",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.value) {
                this.router.navigate(['/user/maintenance/user']);
            }
        })
    }

}
