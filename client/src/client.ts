import { AudioRecorder, Client, SpeechRecognizer } from '@jovotech/client-web';
import { action, computed, configure, makeObservable, observable } from 'mobx';

// There are problems with the current implementation...
// async methods break mobx and therefore the observable is changed from outside an action
// because the ticks after an await call are not in the action-context anymore.
configure({
  enforceActions: 'never',
});

const client = new Client('http://localhost:3000/webhook', {
  output: {
    audioPlayer: {
      enabled: false,
    },
    speechSynthesizer: {
      enabled: false,
    },
    reprompts: {
      enabled: false,
    },
  },
  store: {
    shouldPersistSession: false,
  },
});

makeObservable<AudioRecorder & any>(client.audioRecorder, {
  initialized: observable,
  isInitialized: computed,
  initialize: action,
  recording: observable,
  isRecording: computed,
  start: action,
  stop: action,
  abort: action,
});

makeObservable<SpeechRecognizer & any>(client.speechRecognizer, {
  recording: observable,
  isRecording: computed,
  start: action,
  stop: action,
  abort: action,
  setupSpeechRecognition: action,
});

export default makeObservable<Client & any>(client, {
  initialized: observable,
  isInitialized: computed,
  initialize: action,
  audioRecorder: observable.deep,
  speechRecognizer: observable.deep,
}) as Client;
