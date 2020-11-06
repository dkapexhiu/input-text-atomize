import React from "react";
import atomize from "@quarkly/atomize";

const InputText = ({ type = "text", placeholder = "First Name", ...props }) => (
  <div {...props}>
    <input
      type={`${type}`}
      name="firstName"
      tabindex="1"
      placeholder={`${placeholder}`}
    />
  </div>
);

const Text = atomize(InputText)({
  name: "First Name",
  description: "",
  propInfo: {
    type: {
      control: "input",
      category: "Main"
    },
    placeholder: {
      control: "input",
      category: "Main"
    }
  }
});

export default Text;
