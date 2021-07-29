import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQrBreakComponent } from './modal-qr-break.component';

describe('ModalQrBreakComponent', () => {
  let component: ModalQrBreakComponent;
  let fixture: ComponentFixture<ModalQrBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQrBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQrBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
