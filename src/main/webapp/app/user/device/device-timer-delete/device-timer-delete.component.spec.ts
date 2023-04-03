import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTimerDeleteComponent } from './device-timer-delete.component';

describe('DeviceTimerDeleteComponent', () => {
  let component: DeviceTimerDeleteComponent;
  let fixture: ComponentFixture<DeviceTimerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceTimerDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceTimerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
