import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice01',
  templateUrl: './practice01.component.html',
  styleUrls: ['./practice01.component.less']
})
export class Practice01Component implements OnInit {
  check_box: any = [];
  Evaluation:any=[];
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<5;i++){
      this.check_box.push("選項"+i);
      this.Evaluation.push({
        key:i,
        rate:false
      }); 
    }
  }
  Give_evaluation(a:number){
    for(let i=0;i<5;i++){
      this.Evaluation[i].rate=false;
    }
    for(let i=0;i<=a;i++){
      this.Evaluation[i].rate=true;
    }
    
    console.log(this.Evaluation);
  }
}
