import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import {speechDataRoute} from "./speech-data.route";
import { SpeechDataComponent } from './list/speech-data.component';
import { SpeechDataUpdateComponent } from './update/speech-data-update.component';
import { SpeechDataDeleteDialogComponent } from './delete/speech-data-delete-dialog.component';
import { SpeechDataDetailComponent } from './detail/speech-data-detail.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(speechDataRoute)],
  declarations: [
    SpeechDataComponent,
    SpeechDataUpdateComponent,
    SpeechDataDeleteDialogComponent,
    SpeechDataDetailComponent
  ],
})
export class SpeechDataModule {}
