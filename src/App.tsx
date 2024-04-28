import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    google.script.run.withSuccessHandler(setData)["readData"]?.();
  }, []);

  return (
    <div>
      <div>Hello World</div>
      <button
        onClick={() => {
          google.script.run["appendData"]?.();
        }}
      >
        Click!
      </button>
      {data.map((e, i) => (
        <div key={i}>{JSON.stringify(e)}</div>
      ))}
    </div>
  );
};
