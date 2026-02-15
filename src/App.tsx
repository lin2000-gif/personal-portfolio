import { TerminalProvider } from './context/TerminalContext';
import Terminal from './components/Terminal';

function App() {
  return (
    <TerminalProvider>
      <Terminal />
    </TerminalProvider>
  );
}

export default App;
