export default function TimerSetting(props) {
  const handleDecrementClick = () => {
    if (props.display > 1) props.onClick((prev) => prev - 1);
  };

  const handleIncrementClick = () => {
    if (props.display < 60) props.onClick((prev) => prev + 1);
  };

  return (
    <div className="col-sm">
      <h2 id={`${props.id}-label`} className="text-center">
        {props.title}
      </h2>
      <div id={`${props.id}-length`} className="text-center display-2 mb-3">
        {`${props.display}:00`}
      </div>
      <div className="btn-group w-100 justify-content-center mb-3" role="group">
        <button
          id={`${props.id}-decrement`}
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
          onClick={handleDecrementClick}
          disabled={props.isRunning}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        <button
          id={`${props.id}-increment`}
          className="btn btn-primary p-2 flex-grow-0 w-25"
          type="button"
          onClick={handleIncrementClick}
          disabled={props.isRunning}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
