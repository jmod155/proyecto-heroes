import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCComponent } from './heroes-c.component';

describe('HeroesCComponent', () => {
  let component: HeroesCComponent;
  let fixture: ComponentFixture<HeroesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
