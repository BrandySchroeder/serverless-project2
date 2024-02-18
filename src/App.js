import './App.css';
import { Calculator } from "./Calculator";

const App = () => {
    const styles = {
      container: {
        padding: 40,
        backgroundColor: "purple",
    }
  }
  return (
    <div style={styles.container}>
    <Calculator numberA={5} numberB={1}/>
    <Calculator numberA={10} numberB={2}/>
    <Calculator numberA={15} numberB={3}/>
    <Calculator numberA={20} numberB={4}/>
    </div>
  );
}

export default App;
