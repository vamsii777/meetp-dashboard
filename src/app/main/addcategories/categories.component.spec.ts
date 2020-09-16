import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: AddCategoriesComponent;
  let fixture: ComponentFixture<AddCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
