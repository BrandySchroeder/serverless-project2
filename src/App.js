import './App.css';
import { Calculator } from "./Calculator";

const App = () => {
  return (
    <>
    <Calculator numberA={5} numberB={11}/>
    <Calculator numberA={10} numberB={22}/>
    <Calculator numberA={4} numberB={14}/>
    <Calculator numberA={16} numberB={18}/>
    </>
  );
}

export default App;
