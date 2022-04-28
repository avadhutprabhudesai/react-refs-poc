import React, { createRef, useEffect, useRef } from 'react';

/**
 * createRef
 * useRef
 * createRef vs useRef
 */

export default function Creation({ count }) {
  const createRefInput = createRef();
  const useRefInput = useRef();

  const createRefCount = createRef();
  const useRefCount = useRef();

  useEffect(() => {
    createRefCount.current = count;
    useRefCount.current = count;
  }, []);

  useEffect(() => {
    console.groupCollapsed('Creation.jsx() -> useEffect');
    console.log('count , createRefCount, useRefCount');
    console.log(count);
    console.log(createRefCount);
    console.log(useRefCount);
    console.groupEnd();
  }, [count]);

  return (
    <div className="container">
      <h1>createRef</h1>
      <input type="text" ref={createRefInput} />
      <button onClick={() => createRefInput.current.focus()}>
        Focus input
      </button>
      <h1>useRef</h1>
      <input type="text" ref={useRefInput} />
      <button onClick={() => useRefInput.current.focus()}>Focus input</button>

      <h1>createRef vs useRef</h1>
      <h2>createRefCount (always null): {createRefCount.current}</h2>
      <h2>useRefCount (always 0): {useRefCount.current}</h2>
    </div>
  );
}
