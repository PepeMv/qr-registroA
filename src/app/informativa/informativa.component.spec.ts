import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativaComponent } from './informativa.component';

describe('InformativaComponent', () => {
  let component: InformativaComponent;
  let fixture: ComponentFixture<InformativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
