import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [vacations, setVacations] = useState([]);
  const [username, setUsername] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/vacations')
      .then(response => setVacations(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const vacationRequest = {
      username,
      startDate,
      endDate
    };

    axios.post('http://localhost:5000/vacations/add', vacationRequest)
      .then(response => {
        console.log(response.data);
        setVacations([...vacations, vacationRequest]);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Vacation Requests</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button type="submit">Submit Request</button>
      </form>
      <ul>
        {vacations.map((vac, index) => (
          <li key={index}>{`${vac.username} - from ${vac.startDate} to ${vac.endDate}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
