"use client";

import "regenerator-runtime/runtime";
import Button from "@/components/atoms/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { PiMicrophoneFill } from "react-icons/pi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

type SpeechRecognitionModalProps = {
  onClose: () => void;
};
const SpeechRecognitionModal = ({ onClose }: SpeechRecognitionModalProps) => {
  const [hasInitialized, setHasInitialized] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn{"'"}t support speech recognition.</span>;
  }

  return (
    <>
      <div
        onClick={() => onClose()}
        className="fixed inset-0 bg-black/35 z-[9998]"
      ></div>
      <div className="fixed z-[9999] bg-yt-white p-2 top-2 left-1/2 -translate-x-1/2  max-w-xl w-full h-[464px] pt-8 shadow-xl">
        <div className="flex justify-end">
          <Button onClick={() => onClose()}>
            <AiOutlineClose size={24} />
          </Button>
        </div>
        <div className="px-4">
          {hasInitialized && (
            <>
              <h1 className="text-2xl">Search with your voice</h1>
              <p className="text-yt-gray text-sm mt-6">
                To search by voice, go to your browser settings and allow access
                to microphone
              </p>
            </>
          )}
          {listening ? (
            <h1 className="text-2xl">Listening...</h1>
          ) : (
            <p className="text-yt-gray text-xl">{transcript}</p>
          )}
        </div>
        <div className="flex items-center justify-center h-full">
          {listening ? (
            <Button
              onClick={SpeechRecognition.startListening}
              className="bg-red-500 p-5 hover:bg-red-600"
            >
              <PiMicrophoneFill size={30} />
            </Button>
          ) : (
            <Button
              onClick={SpeechRecognition.startListening}
              className="bg-gray-200 p-5"
            >
              <PiMicrophoneFill
                color={listening ? "white" : "black"}
                size={30}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SpeechRecognitionModal;
