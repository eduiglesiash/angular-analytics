import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMobileComponent } from './card-mobile.component';

describe('CardMobileComponent', () => {
  let component: CardMobileComponent;
  let fixture: ComponentFixture<CardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
