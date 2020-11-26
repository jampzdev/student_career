import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { parse } from 'querystring';

@Component({
  selector: 'sidebar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('toggleUserMenu', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('true', style({
        height: '*',
        opacity: '1'
      })),
      transition(':enter', animate('200ms ease-in')),
      transition(':leave', animate('200ms ease-out'))
    ])
  ]
})
export class UserComponent implements OnInit {
  userMenu: boolean = false;
  user_name = ""
  role      = ""
  constructor() { }

  ngOnInit() {
    this.getUserLoggedIn()
  }

  getUserLoggedIn(){
    var temp = localStorage.getItem("user_logged_in")
    var parsed_temp = JSON.parse(temp)
    this.user_name = parsed_temp[0].fname + " " + parsed_temp[0].lname 
    this.role = parsed_temp[0].role
  }

}
