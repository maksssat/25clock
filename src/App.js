import { useState } from "react";
import Timer from "./Components/Timer";
import TimerSetting from "./Components/TimerSetting";

function App() {
  const [session, setSession] = useState(25);
  const [pause, setPause] = useState(5);

  return (
    <div className="App container-sm p-4 position-absolute top-50 start-50 translate-middle border rounded-3 bg-body shadow">
      <h1 className="text-center display-2 mb-5">25 + 5 Clock</h1>
      <Timer session={session} />
      <div className="row">
        <TimerSetting
          onClick={setSession}
          display={session}
          title={"Session Length"}
          id={"session"}
        />
        <TimerSetting
          onClick={setPause}
          display={pause}
          title={"Break Length"}
          id={"break"}
        />
      </div>
    </div>
  );
}

export default App;
