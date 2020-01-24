import React, { PureComponent } from "react";
import "./Switch.scss";

class Switch extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isChecked: nextProps.isChecked });
  }

  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
    this.props.onClick(!this.state.isChecked);
  };

  render() {
    return (
      <div className="switch-container">
        {this.props.disabled && <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>}
        {this.props.label}
        <label>
          <input
            disabled={this.props.disabled}
            checked={this.state.isChecked}
            onChange={this.handleChange}
            className="switch"
            type="checkbox"
          />
          <div>
            <div />
          </div>
        </label>
      </div>
    );
  }
}

export default Switch;
