import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublicationsViewComponent } from './user-publications-view.component';

describe('UserPublicationsViewComponent', () => {
  let component: UserPublicationsViewComponent;
  let fixture: ComponentFixture<UserPublicationsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPublicationsViewComponent]
    });
    fixture = TestBed.createComponent(UserPublicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
