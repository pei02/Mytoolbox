import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-div',
  templateUrl: './picture-div.component.html',
  styleUrls: ['./picture-div.component.less']
})
export class PictureDivComponent implements OnInit {

  url:any="https://dummyimage.com/600x400/000/fff";
  img_upload:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  
readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.img_upload=false;
    }
  }
  clear_url(){
    this.url="https://dummyimage.com/600x400/000/fff";
    this.img_upload=true;
  }
}
