import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCatalogComponent } from './mobile-catalog.component';

describe('MobileCatalogComponent', () => {
  let component: MobileCatalogComponent;
  let fixture: ComponentFixture<MobileCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
