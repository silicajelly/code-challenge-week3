import React from 'react'
import { useState , useEffect } from 'react';
function Transaction(){
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);
    useEffect(() =>
 {
   fetch("http://localhost:3000/transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
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
    {transaction.map(transaction => (
          <tr key={transaction.id}>
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
        export default Transaction;