import React, { Component } from 'react';
import SearchBox from '../container/SearchBox';
import Result from '../component/Result';
import api from '../Fetch';
import withLoading from '../WithLoading';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: null,
      count: null,
      location: null,
    };
    this.updateAPI = this.updateAPI.bind(this);
  }
  updateAPI(prop, page) {
    this.setState({ loading: true });
    const loc = prop;
    api(prop, page).then(
      (prop) => {
        this.setState({
          loading: false,
          users: prop.items,
          count: prop.total_count,
          location: loc,
        });
      },
    );
  }
  render() {
    const ResultLoading = withLoading(Result);
    return (
      <div>
        <SearchBox handleUpdate={this.updateAPI} />
        <ResultLoading
          isLoading={this.state.loading}
          users={this.state.users}
          count={this.state.count}
          update={this.updateAPI}
          location={this.state.location}
        />
      </div>
    );
  }
}
export default Layout;
