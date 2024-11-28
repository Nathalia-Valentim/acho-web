import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSchoolComponent } from './forms-school.component';

describe('FormsSchoolComponent', () => {
  let component: FormsSchoolComponent;
  let fixture: ComponentFixture<FormsSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
