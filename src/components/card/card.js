import React from "react";

import { Card } from "antd";

const style = { maxWidth: 500, margin: "0 auto" };

export default props => (
  <Card {...props} style={{ ...props.style, ...style }} />
);
