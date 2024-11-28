import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySubscriptionBarComponent } from './company-subscription-bar.component';

describe('CompanySubscriptionBarComponent', () => {
  let component: CompanySubscriptionBarComponent;
  let fixture: ComponentFixture<CompanySubscriptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySubscriptionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySubscriptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
