import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCComponent } from './buscador-c.component';

describe('BuscadorCComponent', () => {
  let component: BuscadorCComponent;
  let fixture: ComponentFixture<BuscadorCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
