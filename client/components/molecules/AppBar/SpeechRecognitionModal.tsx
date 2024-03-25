"use client";

import Button from "@/components/atoms/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { PiMicrophoneFill } from "react-icons/pi";

type SpeechRecognitionModalProps = {
  onClose: () => void;
};
const SpeechRecognitionModal = ({ onClose }: SpeechRecognitionModalProps) => {
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
          <h1 className="text-2xl">Search with your voice</h1>
          <p className="text-yt-gray text-sm mt-6">
            To search by voice, go to your browser settings and allow access to
            microphone
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
            <Button
              className="bg-gray-200 p-5"
            >
              <PiMicrophoneFill size={30} />
           </Button>
        </div>
      </div>
    </>
  );
};

export default SpeechRecognitionModal;
