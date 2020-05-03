import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render LoginPage", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find('h1').text()).toBe("Expensify")
});
test("should call startLogout on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
