import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    // Prevent the site from being refreshed
    event.preventDefault();
    // Create a new movie based on the state values
    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    console.log(newFood);

    // Add new movie to movies list
    props.setFoodList([newFood, ...props.foodList]);

    // Reset input fields
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        value={name}
      />
      <Input
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image"
        value={image}
      />
      <Input
        type="number"
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        value={calories}
      />
      <Input
        type="number"
        onChange={(e) => setServings(e.target.value)}
        placeholder="Servings"
        value={servings}
      />

      <Button htmlType="submit">Submit </Button>
    </form>
  );
};

export default AddFoodForm;
