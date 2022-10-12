import './App.css';
import { Content } from './Content';
import Header from './Header';
import data from './data';

function App() {
  const dataComp = data.map(eachData => {
    return <Content
      {...eachData}
    />
  })
  return (
    <div className="App">
      <Header />
      {dataComp}
    </div>
  );
}

export default App;