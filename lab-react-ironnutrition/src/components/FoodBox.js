import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = ({ food, handleDelete }) => {
  return (
    <Card bordered={true}>
      <Col>
        <Row>{food.name}</Row>
        <Row>
          <img src={food.image} width={200} height={200} alt={food.name} />
        </Row>
        <Divider />

        <Row>Calories: {food.calories}</Row>
        <Row>Servings: {food.servings}</Row>
        <Row>Total Servings: {food.servings * food.calories} kcal</Row>
        <Divider />
        <Button onClick={() => handleDelete(food.name)}>Delete</Button>
      </Col>
    </Card>
  );
};

export default FoodBox;
