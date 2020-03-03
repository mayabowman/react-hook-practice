import React, { useState } from 'react';

function App({ text, maxLength}) {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (text.length <= maxLength) {
    return <span>{text}</span>
  }

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ])
  }

  function printValues(e) {
    e.preventDefault();
    console.log(username, password)
  }


  return (
    <div>
      <div className="App">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
      <span>
        <h2>Let's see it! Or not...</h2>
        {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
        {hidden ? (
          <div><a onClick={() => setHidden(false)}>show more</a></div>
        ) : (
          <div><a onClick={() => setHidden(true)}>show less</a></div>
        )}
      </span>
      <div className='random-number'>
        <h2>Add Random Number</h2>
        <button onClick={addItem}>Add a Number</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={printValues}>
        <h2>useState With Arrays</h2>
        <label>
          Username:
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            name='username'
            type='text'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name='password'
            type='password'
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;