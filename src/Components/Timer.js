export default function Timer(props) {
  const handleResetClick = () => {
    props.setIsRunning(false);
    props.setPause(5);
    props.setSession(25);
    props.setTimer(true);
    props.audioStop();
    props.setTimeLeft(1500000);
  };

  let icon;

  if (props.isRunning) {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-pause"
        viewBox="0 0 16 16"
      >
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
      </svg>
    );
  } else {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-play"
        viewBox="0 0 16 16"
      >
        <path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
      </svg>
    );
  }

  const minutes =
    props.timeLeft === 3600000 ? 60 : new Date(props.timeLeft).getMinutes();
  const seconds = new Date(props.timeLeft).getSeconds();

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="my-5">
      <h2 id="timer-label" className="text-center">
        {props.timer ? "Session" : "Break"}
      </h2>
      <div id="time-left" className="text-center display-1 mb-3">
        {`${minutesStr}:${secondsStr}`}
      </div>
      <div className="btn-group w-100 justify-content-center mb-3" role="group">
        <button
          id="start_stop"
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
          onClick={() => props.setIsRunning((prev) => !prev)}
        >
          {icon}
        </button>
        <button
          id="reset"
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
          onClick={handleResetClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
