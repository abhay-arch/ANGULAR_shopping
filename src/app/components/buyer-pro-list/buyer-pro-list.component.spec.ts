import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProListComponent } from './buyer-pro-list.component';

describe('BuyerProListComponent', () => {
  let component: BuyerProListComponent;
  let fixture: ComponentFixture<BuyerProListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerProListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerProListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
