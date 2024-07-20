
import './App.css'
import Card from './components/Card';

function App() {

  let myObj = {
    username: 'samim',
    age: 21,
  }

  let arr = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="chai aur code" btnText="click me"/>
      <Card username="samim" btnText="visit me"/>
    </>
  );
}
``
export default App
