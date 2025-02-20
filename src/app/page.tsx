"use client"
import { useEffect, useState } from "react";

const dateDavidCarBrokeDown: Date = new Date("2024-12-03T00:00:00Z");

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const dateDiff = now.getTime() - dateDavidCarBrokeDown.getTime();
      setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((dateDiff % (1000 * 60)) / 1000));
    }, 1000);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2">
        <h1 className="text-4xl font-bold">Time since David&apos;s car broke down</h1>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="flex flex-col gap-4 text-center">
            <span className="min-w-[4.5rem] text-3xl font-bold border-red-500 border-2 p-4 rounded-lg ">{days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <span className="min-w-[4.5rem] text-3xl font-bold border-red-500 border-2 p-4 rounded-lg ">{hours}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <span className="min-w-[4.5rem] text-3xl font-bold border-red-500 border-2 p-4 rounded-lg ">{minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <span className="min-w-[4.5rem] text-3xl font-bold border-red-500 border-2 p-4 rounded-lg ">{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
        <p className="text-center w-full">
          Last time was on {dateDavidCarBrokeDown.toDateString()}.
        </p>
      </main>
    </div>
  );
}
