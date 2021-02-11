export default function Timer(props) {
  return (
    <div className="mb-5">
      <h2 id="timer-label" className="text-center">
        Session
      </h2>
      <div id="time-left" className="text-center display-1 mb-3">
        {props.session}
      </div>
      <div className="btn-group w-100 justify-content-center mb-3" role="group">
        <button
          id="start_stop"
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        <button
          id="reset"
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
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
      <audio id="beep" src="#"></audio>
    </div>
  );
}
