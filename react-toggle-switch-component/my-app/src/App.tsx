import { ToggleButton } from './ToggleButton';
import './App.css';

function App() {
  return (
    <>
      <h1>Toggle Button</h1>
      <ToggleButton
        text="OFF"
        color="lightgray"
        className="finalToggleButton"
      />
    </>
  );
}

export default App;
