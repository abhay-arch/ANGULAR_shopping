import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFormListComponent } from './buyer-form-list.component';

describe('BuyerFormListComponent', () => {
  let component: BuyerFormListComponent;
  let fixture: ComponentFixture<BuyerFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
