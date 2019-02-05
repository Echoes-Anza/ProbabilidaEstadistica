import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOptionsPage } from './menu-options.page';

describe('MenuOptionsPage', () => {
  let component: MenuOptionsPage;
  let fixture: ComponentFixture<MenuOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
