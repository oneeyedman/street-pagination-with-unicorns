import React, {Component} from "react";

class Page extends Component {
  render() {
    const {label, active, position, counter} = this.props;
    return (
      <div className={`page page--${position} ${ active ? 'page--current':''}`}>
        <div className="fany-notifier">{counter}</div>
        {label}
      </div>
    );
  }
}

export default Page;