import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSubscriptionComponent } from './forms-subscription.component';

describe('FormsSubscriptionComponent', () => {
  let component: FormsSubscriptionComponent;
  let fixture: ComponentFixture<FormsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
