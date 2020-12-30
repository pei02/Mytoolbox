import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputTmplComponent } from './multi-input-tmpl.component';

describe('MultiInputTmplComponent', () => {
  let component: MultiInputTmplComponent;
  let fixture: ComponentFixture<MultiInputTmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiInputTmplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiInputTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
