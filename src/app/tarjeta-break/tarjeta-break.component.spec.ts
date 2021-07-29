import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBreakComponent } from './tarjeta-break.component';

describe('TarjetaBreakComponent', () => {
  let component: TarjetaBreakComponent;
  let fixture: ComponentFixture<TarjetaBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
