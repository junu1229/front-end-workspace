import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Create = ({addBeverage}) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const Writer = e.target.Writer.value;
    const Title = e.target.Title.value;
    const Date = e.target.Date.value;
    addBeverage(Writer, Title, Date);
    navigate("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Create Books</h1>
      <label htmlFor="Writer">Writer: </label>
      <input type="text" id="Writer" name="Writer" placeholder="Writer" required></input><br></br>
      <label htmlFor="Title">Title: </label>
      <input type="text" id="Title" name="Title" placeholder="Title" required></input><br></br>
      <label htmlFor="Date">Date: </label>
      <input type="date" id="Date" name="Date" required></input><br></br>
      <input type="submit" value="추가"/>
    </form>
  );
};
const Home = ({list, deleteBeverage}) => {
  const onClick = (event) => {
    console.log(event.target.id);
    deleteBeverage(event.target.id);
  };
  return (
  <table border="1px" style={{width: "1000px", borderCollapse: "collapse"}}>
    <thead>
      <tr>
        <th style={{width: "10%"}}>id</th>
        <th style={{width: "20%"}}>Writer</th>
        <th style={{width: "30%"}}>Title</th>
        <th style={{width: "30%"}}>Release Date</th>
        <th style={{width: "10%"}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item) => (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.Writer}</td>
          <td>{item.Title}</td>
          <td>{item.Date}</td>
          <td><button id={item.id} onClick={onClick}>삭제</button></td>
        </tr>
      ))}
    </tbody>
  </table>);
};
const App = () => {
  const [beverages, setBeverages] = useState ([
  ]);
  const [id, setId] = useState(3);
  const addBeverage = (Writer, Title, Date) => {
    const newBeverage = {id, Writer, Title, Date};
    setBeverages([...beverages, newBeverage]);
    setId(id +1);
  };

  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };
  return (
    <BrowserRouter>
      <h1>Books</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/create">추가</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage}/>} />
        <Route path="/create" element={<Create addBeverage={addBeverage}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
