import React from "react";

function Home() {
  return (
    <div>
      <h1>React Server Rendering</h1>
      <button onClick={() => console.log("rehydrate")}>Rehydrate</button>
    </div>
  );
}

export default Home;
