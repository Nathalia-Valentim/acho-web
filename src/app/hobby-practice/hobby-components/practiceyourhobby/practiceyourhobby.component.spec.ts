import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeyourhobbyComponent } from './practiceyourhobby.component';

describe('PracticeyourhobbyComponent', () => {
  let component: PracticeyourhobbyComponent;
  let fixture: ComponentFixture<PracticeyourhobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeyourhobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeyourhobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
