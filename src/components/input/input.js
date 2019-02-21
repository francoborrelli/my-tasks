import React from "react";

import { Input } from "antd";

import "../input/input.css";

export default props => (
  <Input
    className="input-text"
    placeholder="Agrege una descripción breve"
    {...props}
  />
);
