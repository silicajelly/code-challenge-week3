import React from 'react'
import { useState , useEffect } from 'react';
function TransactionList(){
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [transactions, setTransactions] = useState([]);
 
    useEffect(() =>
 {
   fetch("http://localhost:8001/transactions")
     .then((r) => r.json())
     .then((transactions) => setTransactions(transactions));
 }, [])
    return (<div className="Trans">
    <h1>Transactions</h1>
    <table>
      <thead>
        <tr>
        <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          
          <th>Category</th>
          
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
    {transactions.map((transaction ,i)=> (
          <tr key={i}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    )
        }
        export default TransactionList;