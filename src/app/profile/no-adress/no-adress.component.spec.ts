import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdressComponent } from './no-adress.component';

describe('NoAdressComponent', () => {
  let component: NoAdressComponent;
  let fixture: ComponentFixture<NoAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
