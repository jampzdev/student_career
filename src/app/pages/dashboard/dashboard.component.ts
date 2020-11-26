import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    widgetTitle: string = 'Dashboard';
    widgetSubTitle: string = 'Welcome to the unique Material Design admin web app experience!';

    constructor() { }

    ngOnInit() {
    }

}
