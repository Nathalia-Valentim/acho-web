import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavblueComponent } from './navblue.component';

describe('NavblueComponent', () => {
  let component: NavblueComponent;
  let fixture: ComponentFixture<NavblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavblueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
