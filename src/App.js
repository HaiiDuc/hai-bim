import './App.css';
import Navbar from './Component/Navbar'
import Todos from './Component/Todos'
import { Provider } from "react-redux"
import store from './Store/store'
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
