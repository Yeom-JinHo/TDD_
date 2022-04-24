import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];
  let presenter;
  let update;
  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });

  test("inits with habist", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  test("increament", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  test("decreament", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  test("decreament under 0", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
  });

  test("delete ", () => {
    presenter.delete(habits[0], update);
    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe("Running");
    checkUpdateIsCalled();
  });

  test("add", () => {
    presenter.add("Eating", update);
    expect(presenter.getHabits()[2].name).toBe("Eating");
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  test("reset", () => {
    presenter.reset(update);
    expect(presenter.getHabits()[0].count).toBe(0);
    expect(presenter.getHabits()[1].count).toBe(0);
    checkUpdateIsCalled();
  });

  test("maxSize throw error", () => {
    presenter.add("Eating", update);
    expect(() => presenter.add("Eating", update)).toThrow(
      `습관의 갯수는 3 이상이 불가능해용~`
    );
  });

  test("reset eqaul Object", () => {
    const habits = presenter.getHabits();
    presenter.reset(update);
    const updatedHabits = presenter.getHabits();
    expect(habits[1]).toBe(updatedHabits[1]);
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
