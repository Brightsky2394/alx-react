import React from "react";
import {shallow} from "enzyme";
import { Notifications } from "./Notifications";

describe("Notifications test", () => {
  it("Notifications render without crashing", () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper).toBeDefined();
  });
  it("render ul", () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find('ul')).toBeDefined();
  });
  it("render three list items", () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("render correct text", () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find('p').prop("children")).toBe(
      "Here is the list of notifications"
    );
  });
});