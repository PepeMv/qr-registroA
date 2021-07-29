import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQrAlmuerzoComponent } from './modal-qr-almuerzo.component';

describe('ModalQrAlmuerzoComponent', () => {
  let component: ModalQrAlmuerzoComponent;
  let fixture: ComponentFixture<ModalQrAlmuerzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQrAlmuerzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQrAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
