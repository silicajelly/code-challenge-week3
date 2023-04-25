import './App.css';
import LoginForm from './components/LoginForm';
import TransactionList from './components/transaction';

function App() {
  return (
    <div className="App">
      <TransactionList/>
      <LoginForm/>
    </div>
  );
}

export default App;
