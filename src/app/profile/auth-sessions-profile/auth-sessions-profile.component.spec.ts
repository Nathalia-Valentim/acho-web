import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSessionsProfileComponent } from './auth-sessions-profile.component';

describe('AuthSessionsProfileComponent', () => {
  let component: AuthSessionsProfileComponent;
  let fixture: ComponentFixture<AuthSessionsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSessionsProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSessionsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
