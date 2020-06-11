import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentsComponent } from './test-components.component';

describe('TestComponentsComponent', () => {
  let component: TestComponentsComponent;
  let fixture: ComponentFixture<TestComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
