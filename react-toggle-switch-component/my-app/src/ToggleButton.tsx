import { useState } from 'react';

type Props = {
  text: string;
  color: string;
  className: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <div className="buttonContainer" onClick={handleClick}>
        <button
          style={{ background: isOn ? color : 'green' }}
          className="toggleButton"
        />
        <div className={`circle ${isOn ? 'on' : 'off'}`} />
      </div>
      <p className="onoff">{isOn ? text : 'ON'}</p>
    </div>
  );
}
