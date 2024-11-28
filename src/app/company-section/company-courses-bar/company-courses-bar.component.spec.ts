import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCoursesBarComponent } from './company-courses-bar.component';

describe('CompanyCoursesBarComponent', () => {
  let component: CompanyCoursesBarComponent;
  let fixture: ComponentFixture<CompanyCoursesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyCoursesBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCoursesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
