"use client";
import { useState, useRef, useEffect } from "react";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import TextareaAutosize from "react-textarea-autosize";

export default function CraftPost() {
  const [message, setMessage] = useState("");
  const ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (ref.current) {
      const circumference = ref.current.getTotalLength();
      const percentageComplete = message.length / 300;

      if (percentageComplete > 0.9) {
        ref.current.style.stroke = "#ef4444";
      } else if (percentageComplete > 0.8) {
        ref.current.style.stroke = "#fbbf24";
      } else {
        ref.current.style.stroke = "#60a5fa";
      }

      const value = (
        circumference -
        percentageComplete * circumference
      ).toString();

      ref.current.style.strokeDashoffset = value;
    }
  }, [message]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.strokeDasharray = ref.current
        .getTotalLength()
        .toString();
    }
  }, []);
  return (
    <div className="border-y border-black flex py-2 px-4">
      <div className="">
        <div className="h-12 w-12 rounded-full bg-purple-800" />
      </div>
      <div className="flex-1 px-2 ">
        <button className="p-1.5 mb-4">Everyone</button>
        <div className="border-b border-black pb-4 mb-2">
          <TextareaAutosize
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="What's happening?"
            className="w-full bg-transparent outline-none resize-none overflow-hidden text-xl mb-2"
          />
          <button className="text-blue-400 hover:bg-blue-400/10 text-sm rounded-full px-1.5 transition-all duration-150 flex items-center">
            <GlobeAmericasIcon className="w-4 h-4 mr-2" /> Everyone can reply
          </button>
        </div>
        {/* additional options and send */}
        <div className="flex">
          <div>{/* options */}</div>

          <div className="flex justify-end w-full items-center">
            <svg
              height="50"
              className={`relative w-10 h-10 ${
                message.length === 0 ? "opacity-0" : "opacity-100"
              } transition-all duration-200`}
            >
              <circle
                cx="15"
                cy="20"
                r="14"
                fill="transparent"
                stroke="#d1d5db"
                strokeWidth="2.5"
              />
              <circle
                ref={ref}
                cx="15"
                cy="20"
                r="14"
                fill="transparent"
                stroke="#60a5fa"
                strokeWidth="2.5"
              />
              {300 - message.length < 50 && (
                <text
                  x={`${300 - message.length < 10 ? "12" : "8"}`}
                  y="25"
                  fill="black"
                  fontSize="12px"
                >
                  {300 - message.length}
                </text>
              )}
            </svg>
            {/* )} */}

            <button
              disabled={!message}
              className="bg-blue-400 disabled:bg-blue-400/50 font-semibold text-white py-1 px-4 rounded-full ml-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
