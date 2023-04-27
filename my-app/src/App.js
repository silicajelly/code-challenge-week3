import React from 'react';
import './App.css';
import AddTransaction from './components/myForm'; 
import NavBar from './components/NavBar';
import TransactionTable from './components/transactionList';

function App() {
  return(
   <div className='App'>
    <TransactionTable/>
     <AddTransaction/>
     <NavBar/>
   </div>

  )


}

export default App;
