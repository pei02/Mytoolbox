import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-input-tmpl',
  templateUrl: './multi-input-tmpl.component.html',
  styleUrls: ['./multi-input-tmpl.component.less']
})
export class MultiInputTmplComponent implements OnInit {
  hashtag_item = [
    { tag: '' }];
    

    badge_item=[{
      badge:'標籤1'
    }];
  constructor() { }

  ngOnInit(): void {
  }

  Add_Hashtag_item() {
    this.hashtag_item.push({ tag: '' });
  }
  Cut_Hashtag_item(index: number) {
    this.hashtag_item.splice(index, 1);
  }

  add_badge(badge_value:string){
    console.log(badge_value);
    if(badge_value!=''){
      this.badge_item.push({badge:badge_value});
    }
  }

  del_badge(i:number){
    this.badge_item.splice(i,1);
  }
}
