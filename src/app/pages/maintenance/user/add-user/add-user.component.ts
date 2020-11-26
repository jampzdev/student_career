import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../../../services/api.service';
import { BaseComponent } from "../../../../base-component";
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: [
        './add-user.component.scss',
        '../../../../../styles-ama-custom.scss'
    ]
})
export class AddUserComponent extends BaseComponent implements OnInit {
    constructor(public injector: Injector, private http: Http, private API: ApiService) {
        super(injector);
    }

    ngOnInit() {
    }


    saveUser() {
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
