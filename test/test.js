import test from "ava";
import React from "react";
import {Link} from "react-router";
import {shallow, mount} from "enzyme";

import Header from "js/components/header";

test("shallow", t => {
  const wrapper = shallow(<Header />);
  t.is(wrapper.contains(<Link to="/">Header</Link>), true);
});

test("mount", t => {
  const wrapper = mount(<Header />);
  const fooInner = wrapper.find(".wrapper");
  t.is(fooInner.is(".wrapper"), true);
});
