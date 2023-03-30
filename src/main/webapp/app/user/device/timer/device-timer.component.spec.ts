import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTimerComponent } from './device-timer.component';

describe('DeviceTimerComponent', () => {
  let component: DeviceTimerComponent;
  let fixture: ComponentFixture<DeviceTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
