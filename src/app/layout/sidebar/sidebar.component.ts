import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu:Array<any> = []



    loadSidebarContent(){
        var temp = localStorage.getItem("user_logged_in")
        var parsed_temp = JSON.parse(temp)
        this.mainMenu =[
            {
                title: 'Dashboard',
                icon: 'view-dashboard',
                route: '/user/dashboard'
            },
            {
                title: 'Maintenance',
                icon: 'settings',
                sub: [
                    // {
                    //     title: 'Role',
                    //     route: '/user/maintenance/role'
                    // },
                    {
                        title: 'Books',
                        route: '/user/maintenance/books'
                    },
                ],
                visibility: 'inactive'
            },
        ];

    }

    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService) {
    }

    ngOnInit() {
        this.loadSidebarContent()
    }

}
