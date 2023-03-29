import {Component, OnInit} from '@angular/core';
import {SpeechDataDTO} from "../speech-data.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'jhi-speech-data-detail',
  templateUrl: './speech-data-detail.component.html'
})
export class SpeechDataDetailComponent implements OnInit {
  speechData: SpeechDataDTO | null = null;
  deviceAction? : string | null | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({speechData}) => {
      this.speechData = speechData;
      this.deviceAction = this.speechData?.deviceDTO?.deviceAction;
    });
  }

}
