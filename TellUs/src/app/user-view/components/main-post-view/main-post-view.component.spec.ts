import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostViewComponent } from './main-post-view.component';

describe('MainPostViewComponent', () => {
  let component: MainPostViewComponent;
  let fixture: ComponentFixture<MainPostViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPostViewComponent]
    });
    fixture = TestBed.createComponent(MainPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
