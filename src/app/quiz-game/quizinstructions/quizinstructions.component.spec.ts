import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizinstructionsComponent } from './quizinstructions.component';

describe('QuizinstructionsComponent', () => {
  let component: QuizinstructionsComponent;
  let fixture: ComponentFixture<QuizinstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizinstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
