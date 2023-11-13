import React from "react";
import App from "./App";
import shallow from "enzyme";


describe("App tests", () => {
    it('render without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined();
    });
    it("should render a div with the class App-header", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".App-header")).toBeDefined();
    });
    it("should render a div with the class App-body", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".App-body")).toBeDefined();
    });
    it("should render a div with class App-footer", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".App-footer")).toBeDefined();
    });
});