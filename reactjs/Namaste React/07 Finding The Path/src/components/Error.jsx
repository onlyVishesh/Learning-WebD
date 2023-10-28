import { useRouteError } from "react-router-dom";

const Error = () => {
  const {status, statusText} = useRouteError();
  return (
    <div>
      <h1>Oops</h1>
      <p>It Seems You Are Lost !!</p>
      <p>{status + " : " + statusText}</p>
    </div>
  );
};

export default Error;
