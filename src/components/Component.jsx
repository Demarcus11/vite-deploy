import reactLogo from "../assets/react.svg";
import cardFront from "../assets/bg-card-front.png";

export function Component() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={cardFront} />
        </a>
      </div>
    </>
  );
}
