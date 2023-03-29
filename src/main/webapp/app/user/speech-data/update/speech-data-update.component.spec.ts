import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDataUpdateComponent } from './speech-data-update.component';

describe('SpeechDataUpdateComponent', () => {
  let component: SpeechDataUpdateComponent;
  let fixture: ComponentFixture<SpeechDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDataUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
