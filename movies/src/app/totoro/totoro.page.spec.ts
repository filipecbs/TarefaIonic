import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoroPage } from './totoro.page';

describe('TotoroPage', () => {
  let component: TotoroPage;
  let fixture: ComponentFixture<TotoroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotoroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
