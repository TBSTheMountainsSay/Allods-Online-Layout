import 'src/css/reset.scss';
import 'src/css/global.scss';
import './App.css';
import Header from './feauters/Header/Header';
import Main from './feauters/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
