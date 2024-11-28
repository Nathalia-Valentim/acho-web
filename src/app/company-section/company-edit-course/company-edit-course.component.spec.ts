import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditCourseComponent } from './company-edit-course.component';

describe('CompanyEditCourseComponent', () => {
  let component: CompanyEditCourseComponent;
  let fixture: ComponentFixture<CompanyEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyEditCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
