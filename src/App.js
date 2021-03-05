import { useEffect, useRef, useState } from "react";
import Timer from "./Components/Timer";
import TimerSetting from "./Components/TimerSetting";

function App() {
  const [session, setSession] = useState(25);
  const [pause, setPause] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500000);
  const [timer, setTimer] = useState(true);
  const audio = useRef(null);

  useEffect(() => {
    setTimer(true);
  }, [session, pause]);

  useEffect(() => {
    console.log("new timer");
    const timeStart = new Date(0);
    const timeEnd = new Date(
      timeStart.getTime() + (timer ? session : pause) * 60 * 1000
    );
    setTimeLeft(timeEnd - timeStart);
  }, [session, pause, timer]);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev >= 1000) return prev - 1000;
          else {
            clearInterval(id);
            return prev;
          }
        });
      }, 1000);

      return () => clearInterval(id);
    }
  }, [isRunning, timer]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => {
        setTimer((prev) => !prev);
      }, 5000);
      audio.current.play();
    }
  }, [timeLeft]);

  const audioStop = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
  };

  return (
    <div className="container">
      <div className="App p-4 border rounded-3 bg-body shadow">
        <h1 className="text-center display-2 my-3">25 + 5 Clock</h1>
        <Timer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setSession={setSession}
          setTimeLeft={setTimeLeft}
          setPause={setPause}
          setTimer={setTimer}
          timeLeft={timeLeft}
          timer={timer}
          audioStop={audioStop}
        />
        <div className="row my-3">
          <TimerSetting
            onClick={setSession}
            display={session}
            title={"Session Length"}
            id={"session"}
            isRunning={isRunning}
          />
          <TimerSetting
            onClick={setPause}
            display={pause}
            title={"Break Length"}
            id={"break"}
            isRunning={isRunning}
          />
        </div>
        <audio
          id="beep"
          ref={audio}
          src="https://raw.githubusercontent.com/maksssat/25clock/master/src/Components/Audio/Alarm-ringtone.mp3"
        ></audio>
      </div>
    </div>
  );
}

export default App;
