import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSettingDeleteComponent } from './notification-setting-delete.component';

describe('NotificationSettingDeleteComponent', () => {
  let component: NotificationSettingDeleteComponent;
  let fixture: ComponentFixture<NotificationSettingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationSettingDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationSettingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
