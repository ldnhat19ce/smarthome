import { Injectable } from '@angular/core';
import { SpeechDataService } from '../../user/speech-data/service/speech-data.service';
import { ISpeechData, ISpeechDataDTO, SpeechDataDTO } from '../../user/speech-data/speech-data.model';
import { HttpErrorResponse } from '@angular/common/http';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: any;
  transcript_arr = [];
  confidence_arr = [];
  isStarted = false; //<< this Flag to check if the user stop the service
  isStoppedAutomatically = true; //<< this Flag to check if the service

  constructor(private speechDataService: SpeechDataService) {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: { results: Iterable<any> | ArrayLike<any> }) => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });

    this.recognition.addEventListener('end', (condition: any) => {
      this.wordConcat();
      // console.log(this.text);
      if (this.isStoppedAutomatically) {
        this.recognition.stop();
        console.log('stopped automatically!!');
        this.isStarted = false;
        this.isStoppedAutomatically = true;
        const spData: ISpeechDataDTO = new SpeechDataDTO(null, this.text, this.text, null, null, null, null);
        this.speechDataService.handleMessageRequest(spData).subscribe({
          next: (res: ISpeechData) => {
            this.text = res.messageResponse!!;
          },
          error: (e: HttpErrorResponse) => {
            this.text = e.message;
          },
        });
      }
    });
  }

  start() {
    if (!this.isStarted) {
      this.recognition.start();
      this.isStarted = true;
      this.text = '';
      console.log('Speech recognition started');
    }
    return true;
  }

  stop() {
    if (this.isStarted) {
      this.isStoppedAutomatically = false;
      this.wordConcat();
      this.recognition.stop();
      this.isStarted = false;
      this.text = '';
      console.log('End speech recognition by user');
    }
    return false;
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + ' ';
    this.tempWords = '';
  }
}
