import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { Icon } from 'react-fa';
import '../cm-style/pagination.css';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber },
      () => {
        this.props.handleUpdate(this.props.location, this.state.activePage);
      });
  }
  render() {
    return (
      <Pagination
        firstPageText={<Icon name="fa-angle-double-left" className="fa-angle-double-left" />}
        lastPageText={<Icon name="fa-angle-double-right" className="fa-angle-double-right" />}
        nextPageText={<Icon name="fa-angle-right" className="fa-angle-right" />}
        prevPageText={<Icon name="fa-angle-left" className="fa-angle-left" />}
        activePage={this.state.activePage}
        itemsCountPerPage={10}
        totalItemsCount={this.props.allItems}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange}
      />


    );
  }
}
export default Pages;
