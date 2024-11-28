import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNoProfileComponent } from './company-no-profile.component';

describe('CompanyNoProfileComponent', () => {
  let component: CompanyNoProfileComponent;
  let fixture: ComponentFixture<CompanyNoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyNoProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyNoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
