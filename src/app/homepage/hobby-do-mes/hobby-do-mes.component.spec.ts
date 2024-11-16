import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyDoMesComponent } from './hobby-do-mes.component';

describe('HobbyDoMesComponent', () => {
  let component: HobbyDoMesComponent;
  let fixture: ComponentFixture<HobbyDoMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyDoMesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyDoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
