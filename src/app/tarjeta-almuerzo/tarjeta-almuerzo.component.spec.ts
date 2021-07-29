import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAlmuerzoComponent } from './tarjeta-almuerzo.component';

describe('TarjetaAlmuerzoComponent', () => {
  let component: TarjetaAlmuerzoComponent;
  let fixture: ComponentFixture<TarjetaAlmuerzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAlmuerzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
