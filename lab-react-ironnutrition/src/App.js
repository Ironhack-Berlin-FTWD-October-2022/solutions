import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import 'antd/dist/reset.css';

import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredFoodList = foodList.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = (name) => {
    console.log('clicked');
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== name;
    });
    setFoodList(filteredFoodList);
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Button onClick={() => setShowForm(!showForm)}>Show Form</Button>
      {showForm && (
        <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
      )}
      <Row>
        {filteredFoodList.map((food, i) => {
          return (
            <Col key={i}>
              <FoodBox food={food} handleDelete={handleDelete} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
