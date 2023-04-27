import React, { useState } from "react";
import '../App.css';


function AddTransaction() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(() => {
        console.log("Transaction ++");
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      })
      .catch(error => console.error(error));
  }
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input type="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>  
      <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
      <input type="text" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)}/>
      <input type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>

      <button type="submit">Add Here</button>
    </form>
  );
}
export default AddTransaction;