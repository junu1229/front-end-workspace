import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Create = ({addBeverage}) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    addBeverage(title, desc);
    console.log(title);
    navigate("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">음료명: </label>
      <input type="text" id="title" name="title" placeholder="음료명 입력"></input><br></br>
      <label htmlFor="desc">설명: </label>
      <input type="text" id="desc" name="desc" placeholder="설명 입력"></input><br></br>
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
        <th style={{width: "40%"}}>음료명</th>
        <th style={{width: "40%"}}>설명</th>
        <th style={{width: "10%"}}>삭제</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item) => (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.desc}</td>
          <td><button id={item.id} onClick={onClick}>삭제</button></td>
        </tr>
      ))}
    </tbody>
  </table>);
};
const Detail = () => {
  return <h1>Detail</h1>
};
const App = () => {
  const [beverages, setBeverages] = useState ([
    { id: 1,
      title: '여수 윤슬 헤이즐넛 콜드브루',
      desc: '윤슬을 형상화한 헤이즐넛 콜드브루',
    },

    {
      id:2,
      title: '아이스 오렌지 판타지 유스베리 티',
      desc: '상큼한 오렌지와 유스베리, 얼그레이 티의 조화',
    },
  ]);
  const [id, setId] = useState(3);
  const addBeverage = (title, desc) => {
    const newBeverage = {id, title, desc};
    setBeverages([...beverages, newBeverage]);
    setId(id +1);
  };

  const deleteBeverage = (id) => {
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };
  return (
    <BrowserRouter>
      <h1>Cafe</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/detail">Detail</NavLink></li>
        <li><NavLink to="/create">추가</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage}/>} />
        <Route path="/detail" element={<Detail />}/>
        <Route path="/create" element={<Create addBeverage={addBeverage}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
