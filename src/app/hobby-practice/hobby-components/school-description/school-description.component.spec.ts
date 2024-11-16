import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDescriptionComponent } from './school-description.component';

describe('SchoolDescriptionComponent', () => {
  let component: SchoolDescriptionComponent;
  let fixture: ComponentFixture<SchoolDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
