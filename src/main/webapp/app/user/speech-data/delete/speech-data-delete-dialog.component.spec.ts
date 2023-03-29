import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechDataDeleteDialogComponent } from './speech-data-delete-dialog.component';

describe('SpeechDataDeleteDialogComponent', () => {
  let component: SpeechDataDeleteDialogComponent;
  let fixture: ComponentFixture<SpeechDataDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechDataDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeechDataDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
