import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowedComponent } from './user-followed.component';

describe('UserFollowedComponent', () => {
  let component: UserFollowedComponent;
  let fixture: ComponentFixture<UserFollowedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowedComponent]
    });
    fixture = TestBed.createComponent(UserFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
