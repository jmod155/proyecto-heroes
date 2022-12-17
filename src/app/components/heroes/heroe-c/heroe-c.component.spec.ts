import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeCComponent } from './heroe-c.component';

describe('HeroeCComponent', () => {
  let component: HeroeCComponent;
  let fixture: ComponentFixture<HeroeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
