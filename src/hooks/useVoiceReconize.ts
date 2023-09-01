const { Recognizer, Synthesizer, SpeechConstant } = require("react-native-speech-iflytek");
import { NativeEventEmitter, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';


export default function UseVoiceReconize() {
    const [voice, setVoice] = useState(null);
    let onRecognizerResult:any;


    useEffect(() => {
        console.log(Recognizer);
        Recognizer.init("57c7c5b0");
        const recognizerEventEmitter = new NativeEventEmitter(Recognizer);
        recognizerEventEmitter.addListener('onRecognizerResult', onRecognizerResult);
    }, [])

    


    const voiceRecognizer = {
        startReconize() {
            Recognizer.start();
        },

        getResult() {
            return Recognizer.onRecognizerResult(JSON.stringify({}))
        }
    }
    
    return voiceRecognizer
}

