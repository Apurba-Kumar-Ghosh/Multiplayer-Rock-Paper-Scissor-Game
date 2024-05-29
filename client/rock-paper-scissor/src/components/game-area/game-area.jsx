import React, { useState } from "react";

export const GameArea = ({ username, opponent }) => {
  const [p1Score, setP1Score] = useState();

  const [p2Score, setP2Score] = useState();

  return (
    <div>
      {username} vs {opponent}
    </div>
  );
};
