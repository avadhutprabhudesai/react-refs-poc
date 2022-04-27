import React, { forwardRef, useRef, useState } from 'react';
import './style.css';
import Creation from './Creation';
import UseRef from './UseRef';

const Input = forwardRef(function Input(props, ref) {
  return (
    <>
      <h1>Forward ref demo</h1>
      <input type="text" ref={ref} />
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const focus = () => inputRef.current.focus();
  return (
    <div>
      <Creation count={count} />
      <button onClick={() => setCount(count + 1)}>Inc count</button>
      <UseRef />
      <Input ref={inputRef} />
      <button onClick={focus}>Focus input in child</button>
    </div>
  );
}
