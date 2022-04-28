import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './style.css';
import Creation from './creation/Creation';
import UseRef from './creation/UseRef';

const Input = forwardRef(function Input(props, ref) {
  return (
    <div className="container">
      <h1>Forward ref demo</h1>
      <input type="text" ref={ref} />
    </div>
  );
});

const CustomInput = forwardRef(function (props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    console.log('useImperativeHandleCalled');
    return {
      changeBorder: (color = '#ccc') => {
        inputRef.current.style.border = `5px solid ${color}`;
      },
    };
  });

  return (
    <div className="container">
      <h1>useImperativeHandle()</h1>
      <input type="text" ref={inputRef} />{' '}
    </div>
  );
});

CustomInput.displayName = 'CustomInput';

export default function App() {
  const [count, setCount] = useState(0);
  const [border, setBorder] = useState('black');
  const inputRef = useRef(null);
  const customInputRef = useRef(null);

  useEffect(() => {
    customInputRef.current.changeBorder(border);
  }, [border]);

  const focus = () => inputRef.current.focus();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc count</button>
      <Creation count={count} />
      <UseRef />
      <button onClick={focus}>Focus input in child</button>
      <Input ref={inputRef} />
      <input
        type="text"
        onChange={(e) => setBorder(e.target.value)}
        value={border}
      />
      <span>Type the color of the border here and observe input field</span>
      <CustomInput ref={customInputRef} />
    </div>
  );
}
