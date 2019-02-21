import React from "react";

import { Card } from "antd";

const style = { width: 500, margin: "10px auto" };

export default props => (
  <Card {...props} style={{ ...style, ...props.style }} />
);
