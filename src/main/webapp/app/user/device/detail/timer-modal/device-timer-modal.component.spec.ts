import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTimerModalComponent } from './device-timer-modal.component';

describe('DeviceTimerModalComponent', () => {
  let component: DeviceTimerModalComponent;
  let fixture: ComponentFixture<DeviceTimerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTimerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceTimerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
