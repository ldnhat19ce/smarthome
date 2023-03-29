import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDataDetailComponent } from './speech-data-detail.component';

describe('SpeechDataDetailComponent', () => {
  let component: SpeechDataDetailComponent;
  let fixture: ComponentFixture<SpeechDataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDataDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
