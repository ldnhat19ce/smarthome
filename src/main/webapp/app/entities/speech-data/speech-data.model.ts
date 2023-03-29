export interface ISpeechData {
  id: string;
  login?: string;
}

export class SpeechData implements ISpeechData {
  constructor(public id: string, public login: string) {
  }
}
