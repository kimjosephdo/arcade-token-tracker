import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonicAdventureGameComponent } from './sonic-adventure-game.component';

describe('SonicAdventureGameComponent', () => {
  let component: SonicAdventureGameComponent;
  let fixture: ComponentFixture<SonicAdventureGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonicAdventureGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonicAdventureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
