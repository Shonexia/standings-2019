import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

function App() {
  const [books, setBooks] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      'http://ergast.com/api/f1/2019/last/driverStandings.json?fbclid=IwAR1mbzPDL8yjij_vp5fs5-cgzvUBwXXjSZDug0X_MEaWcj2F1uflpHyQW4U'
    );
    setBooks(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (  
    <div className="App">
      <h1>Standings 2019</h1>
      {/* Fetch data from API */}
      <div>{fetchData}</div>
      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.driverId}</h2>

                <div className="details">
                  <p>👨: {book.position}</p>
                  <p>📖: {book.points} pages</p>
                  <p>🏘️: {book.givenName}, {book.famailyName}</p>
                  <p>⏰: {book.constructorId}</p>
                </div>
              </div>

              /*
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {book.publisher}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {book.isbn}</p>
                </div>
              </div>
               */




            );
          })}
      </div>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
