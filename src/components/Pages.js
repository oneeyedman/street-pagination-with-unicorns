import React, {Component} from "react";
import Page from './Page';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  createPages(array) {
    const {actualPage} = this.props;
    return array.map((item, i)=>{
      return <Page label={item.label} active={(i === actualPage) ? true: false} key={i} position={i} counter={item.counter} />
    })
  }

  nextPage() {
    const {pages, actualPage, setCurrentPage} = this.props;
    const totalPages = pages.length;
    if (actualPage < totalPages) {
      setCurrentPage(actualPage + 1);
    }
  }

  render() {
    const {pages} = this.props;
    return (
      <div className="pages">
        <div className="pages__inner">
          {this.createPages(pages)}
        </div>
        <button className="pages__nav pages__nav--next" onClick={this.nextPage}>Siguiente</button>
      </div>
    );
  }
}

export default Pages;