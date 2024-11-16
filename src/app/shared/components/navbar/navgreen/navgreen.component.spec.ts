import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgreenComponent } from './navgreen.component';

describe('NavgreenComponent', () => {
  let component: NavgreenComponent;
  let fixture: ComponentFixture<NavgreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavgreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavgreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
