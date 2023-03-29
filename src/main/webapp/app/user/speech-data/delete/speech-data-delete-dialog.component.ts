import {Component} from '@angular/core';
import {SpeechData} from "../speech-data.model";
import {SpeechDataService} from "../service/speech-data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'jhi-speech-data-delete-dialog',
  templateUrl: './speech-data-delete-dialog.component.html'
})
export class SpeechDataDeleteDialogComponent {
  speechData?: SpeechData;

  constructor(private speechDataService: SpeechDataService,
              private activeModal: NgbActiveModal) {
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.speechDataService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
