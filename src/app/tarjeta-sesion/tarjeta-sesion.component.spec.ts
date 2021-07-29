import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSesionComponent } from './tarjeta-sesion.component';

describe('TarjetaSesionComponent', () => {
  let component: TarjetaSesionComponent;
  let fixture: ComponentFixture<TarjetaSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
