import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeatures } from './game-features';

describe('GameFeatures', () => {
  let component: GameFeatures;
  let fixture: ComponentFixture<GameFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
