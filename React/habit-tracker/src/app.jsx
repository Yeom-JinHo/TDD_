import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

const App = ({ presenter }) => {
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = useCallback((habit) => {
    // setHabits((habits) =>
    //   habits.map((item) => {
    //     if (item.id === habit.id) {
    //       return { ...habit, count: habit.count + 1 };
    //     }
    //     return item;
    //   })
    // );
    presenter.increment(habit, setHabits);
  }, []);

  const handleDecrement = useCallback((habit) => {
    // setHabits((habits) =>
    //   habits.map((item) => {
    //     if (item.id === habit.id) {
    //       const count = habit.count - 1;
    //       return { ...habit, count: count < 0 ? 0 : count };
    //     }
    //     return item;
    //   })
    // );
    presenter.decrement(habit, setHabits);
  }, []);

  const handleDelete = useCallback((habit) => {
    // setHabits((habits) => habits.filter((item) => item.id !== habit.id));
    presenter.delete(habit, setHabits);
  }, []);

  const handleAdd = useCallback((name) => {
    // setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
    presenter.add(name, setHabits);
  }, []);

  const handleReset = useCallback(() => {
    // setHabits((habits) =>
    //   habits.map((habit) => {
    //     if (habit.count !== 0) {
    //       return { ...habit, count: 0 };
    //     }
    //     return habit;
    //   })
    // );
    presenter.reset(setHabits);
  }, []);

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
