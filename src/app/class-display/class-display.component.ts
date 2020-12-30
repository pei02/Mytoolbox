import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-display',
  templateUrl: './class-display.component.html',
  styleUrls: ['./class-display.component.less']
})
export class ClassDisplayComponent implements OnInit {

  data:any=[];
  activeRowIndex:any = 0;
  matrixData:any=[];
  selData:any;
  rwd:any=[];
  loading=false;
  constructor() { }

  

  ngOnInit(): void {
    for (let i = 0; i <= 12; i++) {
      this.data.push({
        class: "分類" + i,
        children: [
          { c_class: "子分類" + i },
          { c_class: "子分類" + (i + 1) },
          { c_class: "子分類" + (i + 2) },
          { c_class: "子分類" + (i + 3) },
          { c_class: "子分類" + (i + 4) },
          { c_class: "子分類" + (i + 5) },
          { c_class: "子分類" + (i + 6) },
          { c_class: "子分類" + (i + 7) },
          { c_class: "子分類" + (i + 8) },
        ]
      })
    }

    for (let i =0;i<this.data.length; i+=4) {
      this.matrixData.push(this.data.slice(i,i+4));
    }

    this.rwd_class();

    this.selData ="";
  }

  selItem(rowIndex: number, col:any,a:any) {
    if (this.selData && this.selData.class == col.class) {
      this.activeRowIndex = null;
      this.selData = null;
    }
    else {
      this.activeRowIndex = rowIndex;
      this.selData = col;
    }
    this.rwd_class();
    this.rwd[rowIndex][a]="bg-light row d-md-none";
  }  

  rwd_class(){
    this.rwd=[];
    let i=new Array(this.data.length);
    i=i.fill("bg-light row d-none");
    for(let a=0;a<4;a++){
      this.rwd.push(i.slice(a,a+4));
    }
  }
}
