import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNotificationComponent } from './company-notification.component';

describe('CompanyNotificationComponent', () => {
  let component: CompanyNotificationComponent;
  let fixture: ComponentFixture<CompanyNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
