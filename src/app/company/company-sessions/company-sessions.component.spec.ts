import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySessionsComponent } from './company-sessions.component';

describe('CompanySessionsComponent', () => {
  let component: CompanySessionsComponent;
  let fixture: ComponentFixture<CompanySessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
