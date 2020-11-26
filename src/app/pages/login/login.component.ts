import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../services/api.service';
import { BaseComponent } from "../../base-component";

import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss',
        '../../../styles-ama-custom.scss'
    ]
})
export class LoginComponent extends BaseComponent implements OnInit {
    uname           = ""
    pwd             = ""
    new_fname       = ""
    new_lname       = ""
    new_uname       = ""
    new_pwd         = ""
    new_confirm_pwd = ""

    loginStats: any = {
        login: true,
        signUp: false,
        forgotPassword: false
    };

    toggleBlock(currentBlock, nextBlock) {
        this.loginStats[currentBlock] = false;
        this.loginStats[nextBlock] = true;
    };

    constructor(public injector: Injector, private http: Http, private API: ApiService) {
        super(injector);
    }

    ngOnInit() {
    }

    auth(){
        this.router.navigateByUrl('/user/dashboard');
    }

  
}
