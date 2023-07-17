import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewTestComponent } from './main-view-test.component';

describe('MainViewTestComponent', () => {
  let component: MainViewTestComponent;
  let fixture: ComponentFixture<MainViewTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainViewTestComponent]
    });
    fixture = TestBed.createComponent(MainViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
