import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice01',
  templateUrl: './practice01.component.html',
  styleUrls: ['./practice01.component.less']
})
export class Practice01Component implements OnInit {
  check_box: any = [];
  Satisfaction_form: any = [
    {
      section: "服務人員部分",
      children: [
        { Satisfaction: "服務態度" ,face:true},
        { Satisfaction: "辦事效率" ,face:true},
        { Satisfaction: "諮詢服務內容" ,face:true},     
      ]
    },
    {
      section: "社工督導人員部分",
      children: [
        { Satisfaction: "服務態度" ,face:true},
        { Satisfaction: "辦事效率" ,face:true},
        { Satisfaction: "諮詢服務內容" ,face:true}, 
      ]
    },
    {
      section: "志工人員部分",
      children: [
        { Satisfaction: "服務態度" ,face:true},
        { Satisfaction: "辦事效率" ,face:true},
        { Satisfaction: "諮詢服務內容",face:true },
      ]
    },
    {
      section: "環境、設施及服務措施部分",
      children: [
        { Satisfaction: "環境的整潔及舒適" ,face:true},
        { Satisfaction: "硬體設施及空間配置" ,face:true},
        { Satisfaction: "提供的各項服務措施" ,face:false},
        { Satisfaction: "滿意情形" ,face:true},
      ]
    }, 
  ];
  icon:any=[
    {icon:"fa-angry",css:"btn-angry"},
    {icon:"fa-frown",css:"btn-frown"},
    {icon:"fa-meh",css:"btn-meh"},
    {icon:"fa-grin",css:"btn-grin"},
    {icon:"fa-laugh-beam",css:"btn-laugh-beam"},
  ];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.check_box.push("選項" + i);
      
    }
  }
  
}
