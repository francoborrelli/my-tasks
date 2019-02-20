import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../../store/actions";
import { validateText } from "../../utils/validator";

import Card from "../card/card";
import { Input, Form, Button } from "antd";

const FormItem = Form.Item;

class New extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <Card>
        <Input
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <Button
          style={{ marginTop: 10 }}
          disabled={!validateText(this.state.text)}
          onClick={() => this.props.addToDo(this.state.text)}
        >
          Guardar
        </Button>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(New);
