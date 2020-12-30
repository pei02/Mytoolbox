import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDivComponent } from './picture-div.component';

describe('PictureDivComponent', () => {
  let component: PictureDivComponent;
  let fixture: ComponentFixture<PictureDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
