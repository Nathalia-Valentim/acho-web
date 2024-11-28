import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSessionsCompanyComponent } from './auth-sessions-company.component';

describe('AuthSessionsCompanyComponent', () => {
  let component: AuthSessionsCompanyComponent;
  let fixture: ComponentFixture<AuthSessionsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSessionsCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSessionsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
