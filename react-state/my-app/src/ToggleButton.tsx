import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by useState:', isClicked);
  function handleClick() {
    console.log('value before calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('value after calling setter:', isClicked);
  }
  return (
    <button
      style={{ backgroundColor: isClicked ? color : 'blue' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
