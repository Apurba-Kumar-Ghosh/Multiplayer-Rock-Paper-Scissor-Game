import { useEffect, useState } from "react";

export const useLeaderboard = () => {
  const [leaderboard, setLeaderBoard] = useState();

  useEffect(() => {
    const value = localStorage.getItem("leaderboard");

    if (!value) setLeaderBoard({});
    else {
      setLeaderBoard(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    if (leaderboard) {
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
  }, [leaderboard]);

  const updateLeaderboard = (name, count) => {
    setLeaderBoard((prev) => ({
      ...prev,
      [name]: count,
    }));
  };

  return {
    leaderboard,
    updateLeaderboard,
  };
};
