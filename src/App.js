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
      }, 3000);
      setTimeout(() => {
        audio.current.play();
      }, 1000);
      setTimeout(() => {
        audio.current.play();
      }, 2000);
      audio.current.play();
    }
  }, [timeLeft]);

  return (
    <div className="App container-sm p-4 position-absolute top-50 start-50 translate-middle border rounded-3 bg-body shadow">
      <h1 className="text-center display-2 mb-5">25 + 5 Clock</h1>
      <Timer
        display={session}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setSession={setSession}
        setPause={setPause}
        timeLeft={timeLeft}
        timer={timer}
        setTimer={setTimer}
      />
      <div className="row">
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
        src="https://raw.githubusercontent.com/maksssat/25clock/master/src/Components/Audio/beep-08b.mp3"
      ></audio>
    </div>
  );
}

export default App;
