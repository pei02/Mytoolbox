import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.less']
})
export class ButtonBoxComponent implements OnInit {
  check_box: any = [];
  Radio_button:any=[];
  Evaluation:any=[];

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<5;i++){
      this.check_box.push("選項"+i);
      this.Radio_button.push({
        active:i==0?true:false,
        options:"選項"+i
      });
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
