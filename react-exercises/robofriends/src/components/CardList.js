import React from "react";
import Card from "./Card";

// This is a Dumb component or also called Pure Component
// 'cause the don't have state
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
