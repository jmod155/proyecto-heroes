import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetaCComponent } from './heroe-tarjeta-c.component';

describe('HeroeTarjetaCComponent', () => {
  let component: HeroeTarjetaCComponent;
  let fixture: ComponentFixture<HeroeTarjetaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTarjetaCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTarjetaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
