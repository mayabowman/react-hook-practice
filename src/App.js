import React, { useState } from 'react';

function App({ text, maxLength}) {
  // const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>
  }


  return (
    // <div className="App">
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>
    //     Click Me
    //   </button>
    // </div>
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}>show more</a>
      ) : (
        <a onClick={() => setHidden(true)}>show less</a>
      )}
    </span>
  );
}

export default App;
