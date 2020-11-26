import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class Layout2Component implements OnInit {

    constructor(public service: AppService) { }

  ngOnInit() {
  }

}
