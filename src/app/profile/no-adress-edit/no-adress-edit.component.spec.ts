import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdressEditComponent } from './no-adress-edit.component';

describe('NoAdressEditComponent', () => {
  let component: NoAdressEditComponent;
  let fixture: ComponentFixture<NoAdressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAdressEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAdressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
