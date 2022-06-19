import React, { useState } from "react";

const SaveJokes = () => {
  const [JokeAmount, setJokeAmount] = useState<number>(0);
  const [isFocus, setIsFocus] = useState(false);

  const handleJokeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJokeAmount(parseFloat(e.currentTarget.value));
  };
  const DecrementAmount = () => {
    setJokeAmount((prev) => prev - 1);
  };
  const IncrementAmount = () => {
    setJokeAmount((prev) => prev + 1);
  };
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFocus(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFocus(false);
  };
  const isGoodAmount: boolean =
    JokeAmount >= 0 && JokeAmount <= 100 ? true : false;

  return (
    <div className="SaveJokes">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          isGoodAmount
            ? "SaveJokes__InputContainer"
            : "SaveJokes__InputContainer wrongAmount"
        }
      >
        <button onClick={DecrementAmount}>
          {!isFocus ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-dash-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
            </svg>
          )}
        </button>

        <input
          type="number"
          value={JokeAmount}
          onChange={handleJokeAmountChange}
          className="SaveJokes-input"
        />
        <button onClick={IncrementAmount}>
          {!isFocus ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          )}
        </button>
      </div>
      <button
        className={
          JokeAmount > 0 && isGoodAmount
            ? "SaveJokes__Button goodAmount"
            : "SaveJokes__Button"
        }
      >
        Save Jokes
      </button>
    </div>
  );
};

export default SaveJokes;
