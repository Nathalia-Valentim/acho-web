import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdashComponent } from './quizdash.component';

describe('QuizdashComponent', () => {
  let component: QuizdashComponent;
  let fixture: ComponentFixture<QuizdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
