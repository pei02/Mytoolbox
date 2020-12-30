import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-input-tmpl',
  templateUrl: './multi-input-tmpl.component.html',
  styleUrls: ['./multi-input-tmpl.component.less']
})
export class MultiInputTmplComponent implements OnInit {
  hashtag_item = [
    { tag: '' }];
    
  constructor() { }

  ngOnInit(): void {
  }

  Add_Hashtag_item() {
    this.hashtag_item.push({ tag: '' });
  }
  Cut_Hashtag_item(index: number) {
    this.hashtag_item.splice(index, 1);
  }
}
