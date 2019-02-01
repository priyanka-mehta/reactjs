import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../history';

import { NavLink } from 'react-router-dom';
import { fetchUserList } from './../API/UserApi';
import { deleteRecord } from '../API/UserApi';

import './../CssFiles/Recordlist.css';

class Recordlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 1,
      loading: true,
      pageChange: false,
    };
    this.pageNumber = this.pageNumber.bind(this);
    this.onClick = this.onClick.bind(this);
    this.fetchUserList = this.fetchUserList.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }

  onClick(e) {
    this.setState({ currentPage: e.target.value, pageChange: true }, () => {
      this.fetchUserList();
    });
  }

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList() {
    fetchUserList(this.state.currentPage)
      .then(res => {
        if (res.data || res.data.data || res.data.data.data) {
          this.setState(
            {
              loading: false,
              pageChange: false,
              pages: res.data,
            }
          );
        }
      });
  }

  pageNumber() {
    return Array(this.state.pages.total_pages).fill().map((btn, i) =>
      <div key={`btn${i + 1}`} style={{ float: 'left', height: 50, width: 35, textAlign: 'center' }}>
        <button value={i + 1} className={(Number(this.state.pages.page) === i + 1) ? "btn active" : "btn"}
          disabled={Number(this.state.pages.page) === i + 1}
          onClick={(e) => this.onClick(e)}> {i + 1}</button ></div>
    );
  }
  // pageNumber() {
  //   var page = [];
  //   for (var i = 1; i <= this.state.pages.total_pages; i++) {
  //     page.push(
  //       <div style={{ float: 'left', height: 50, width: 35, textAlign: 'center' }}>
  //         <button disabled={Number(this.state.pages.page) === i} className={(Number(this.state.pages.page) === i) ? "btn active" : "btn"} value={i} onClick={(e) => this.onClick(e)}>{i}</button>
  //       </div>
  //     );
  //   }
  //   return (page);
  // }

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
    const { loading, pageChange, pages } = this.state;
    if (loading) {
      return (<b className='loading'>Please wait while we are getting user details...</b>);
    }

    return (
      <>
        <div className='loading'>
          <div className="mainTable bottomBorder leftBorder rightBorder ">
            <div className="headerData topBorder headingBottom">
              <div className="tableData rightBorder"> Firstname </div>
              <div className="tableData rightBorder"> Lastname </div>
              <div className="tableData rightBorder"> Avtar </div>
              <div className="tableData"> Action </div>
            </div>
            {pages.data.map((u, i) =>
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
      </>
    );
  }
}

Recordlist.propTypes = {
  match: PropTypes.object,
};
export default Recordlist;