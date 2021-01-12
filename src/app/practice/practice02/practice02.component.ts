import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice02',
  templateUrl: './practice02.component.html',
  styleUrls: ['./practice02.component.less']
})
export class Practice02Component implements OnInit {
  check_box: any = ["聲請人/原告","相對人/被告","陪同未成年子女"];
  constructor() { }

  ngOnInit(): void {
    
  }

}
