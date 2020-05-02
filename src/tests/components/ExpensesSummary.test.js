import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render Expense Summary component with expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense Summary component with one expens", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense Summary component with empty expense list", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
