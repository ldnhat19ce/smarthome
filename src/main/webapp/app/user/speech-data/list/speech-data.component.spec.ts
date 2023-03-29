import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDataComponent } from './speech-data.component';

describe('SpeechDataComponent', () => {
  let component: SpeechDataComponent;
  let fixture: ComponentFixture<SpeechDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
