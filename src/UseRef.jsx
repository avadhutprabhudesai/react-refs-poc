import React, { useEffect, useRef, useState } from 'react';

export default function UseRef() {
  const [name, setName] = useState('');
  const nameRef = useRef('');

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  return (
    <div className="container">
      <h1>UseRef Demo</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Current name is <b>{name.toUpperCase()}</b>
      </p>
      <p>
        Previous name was <b>{nameRef.current.toUpperCase()}</b>
      </p>
    </div>
  );
}
