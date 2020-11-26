import * as moment from 'moment';
import { Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Router } from "@angular/router";

export class BaseComponent {
    protected https: HttpClient;
    protected router: Router;
    constructor(public injector: Injector) {

        this.https = injector.get(HttpClient);
        this.router = injector.get(Router);
    }

    CURRENT_DATE        = moment().format("YYYY-MM-DD")
    CURRENT_YEAR        = moment().format("YYYY")
    CURRENT_MONTH       = moment().format("MM")
    CURRENT_DAY         = moment().format("DD")

    testGlobalFunction() {
        return "catherine global function"
    }
}