import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  data:any=[];
  isCreate:boolean=false;
  filter_data:any;
  constructor() { }

  ngOnInit(): void {
    for(let i =0;i<=5;i++){
      this.data.push({
        key:i,
        content1:"內容"+i,
        content2:"內容"+i,
        content3:"內容"+i,
        content4:"內容"+i,
      });

    }
  }

  open_modal(key:any=null){
    if(key!=null){
      this.isCreate=true;
      this.filter_data=this.data.find(function (x:any) {
          return x.key == key;
        });
      console.log(this.filter_data);
    }else{
      this.isCreate=false;
    }
  }

}
