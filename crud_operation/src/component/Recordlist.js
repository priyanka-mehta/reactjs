import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../history';

import { NavLink } from 'react-router-dom';

import { fetchData } from './UserApi';
import { deleteRecord } from './UserApi';

import './../CssFiles/Recordlist.css';

class Recordlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false,
      currentPage: 1,
      pages: [],
      pageChange: false,
    };
    this.pageNumber = this.pageNumber.bind(this);
    this.onClick = this.onClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }

  onClick(e) {
    this.setState({ currentPage: e.target.value, pageChange: true }, () => {
      this.fetchData();
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchData();
  }

  fetchData() {
    fetchData(this.state.currentPage)
      .then(res => {
        if (res.data || res.data.data || res.data.data.data) {
          this.setState(
            {
              userList: res.data.data || null,
              loading: false,
              pageChange: false,
              pages: res.data,
            }
          );
        }
      });
  }

  pageNumber() {
    var page = [];
    for (var i = 1; i <= this.state.pages.total_pages; i++) {
      page.push(
        <div style={{ float: 'left', height: 50, width: 35, textAlign: 'center' }}>
          <button disabled={Number(this.state.pages.page) === i} className={(Number(this.state.pages.page) === i) ? "btn active" : "btn"} value={i} onClick={(e) => this.onClick(e)}>{i}</button>
        </div>
      );
    }
    return (page);
  }

  isDelete() {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.deleteRecord();
    } else {
      this.setState({ cancel: true });
    }
  }

  deleteRecord() {
    deleteRecord(this.props.match.params.id)
      .then((res) => {
        console.log('User deleted : ', res);
        this.setState({ delete: true });
        history.push('/');
      });
  }

  render() {
    const { loading, userList, pageChange } = this.state;
    if (loading) {
      return (<b className='loading'>Please wait while we are getting user details...</b>);
    }

    return (
      <div className="App1">
        <div className='loading'>
          <div>
            <div className="mainTable bottomBorder leftBorder rightBorder ">
              <div className="headerData topBorder headingBottom">
                <div className="tableData rightBorder"> Firstname </div>
                <div className="tableData rightBorder"> Lastname </div>
                <div className="tableData rightBorder"> Avtar </div>
                <div className="tableData"> Action </div>
              </div>
              {userList.map((u, i) =>
                <div key={i}>
                  <div className="topBorder">
                    <div className="tableData rightBorder"> {u.first_name} </div>
                    <div className="tableData rightBorder"> {u.last_name} </div>
                    <div className="tableData rightBorder"> <img src={u.avatar} alt="Profile" className='image' /> </div>
                    <div className="tableData">
                      <NavLink to={`/user/${i + 1}`} className='link1'>Edit</NavLink>
                      |
                      <NavLink to={`/delete/${i + 1}`} onClick={this.isDelete} className='link1'>Delete</NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {this.pageNumber()}{pageChange ? <p>Fetching Data...</p> : null}
          </div>
        </div>
      </div>
    );
  }
}

Recordlist.propTypes = {
  match: PropTypes.object,
};
export default Recordlist;