import { useState, useTransition } from 'react';
import { searchItems, List, randomChars } from './List';

function App() {
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue(value);
    startTransition(() => {
      setItems(searchItems(value));
    });
  };

  const handleRandom = () => {
    const value = randomChars();
    setValue(value);
    setItems(searchItems(value));
  };

  return (
    <div>
      <p>GLOWING SPOON!s</p>
      <div style={{ opacity: isPending ? .5 : 1 }}>
        <input value={value} onChange={handleChange} />
        <button onClick={handleRandom}>Random</button>
      </div>
      <List items={items} />
    </div>
  );
}

export default App;