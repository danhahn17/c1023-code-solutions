import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function HotButton({ text, color }: Props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button
        style={{
          backgroundColor:
            count >= 18
              ? 'rgb(255,255,255)'
              : count >= 15
              ? 'rgb(255,255,0)'
              : count >= 12
              ? 'rgb(246,178,107)'
              : count >= 9
              ? 'rgb(224,102,102ed'
              : count >= 6
              ? 'rgb(103,78,167)'
              : count >= 3
              ? 'rgb(53,28,117)'
              : color,
          color: count >= 12 ? 'black' : 'white',
        }}
        onClick={handleClick}>
        {text}
      </button>
      <p>Click Count: {count}</p>
    </>
  );
}
