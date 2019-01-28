import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Recordlist.css';

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

  }

  onClick(e) {
    this.setState({ currentPage: e.target.value, pageChange: true }, () => {
      this.fetchData();
    });
  }

  fetchData() {
    axios.get(`https://reqres.in/api/users?page=${this.state.currentPage}`)
      .then(res => {
        return res;
      })
      .then(res => {
        console.log('res :', res);
        this.setState({ userList: res.data.data || [], loading: false, pageChange: false, pages: res.data });
      })
      .catch(function (error) {
        alert("Oops! Something went wrong.");
      });
  }

  pageNumber() {
    var page = [];
    for (var i = 1; i <= this.state.pages.total_pages; i++) {
      page.push(
        <div>
          <button className={(Number(this.state.currentPage) === i) ? "btn active" : "btn"} value={i} onClick={(e) => this.onClick(e)}>{i}</button>
        </div>
      );
    }
    return (page);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return (<b className='loading'>Please wait ...</b>);
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
              {this.state.userList.map((u, i) =>
                <div key={i}>
                  <div className="topBorder">
                    <div className="tableData rightBorder"> {u.first_name} </div>
                    <div className="tableData rightBorder"> {u.last_name} </div>
                    <div className="tableData rightBorder"> <img src={u.avatar} alt="Profile" className='image' /> </div>
                    <div className="tableData">
                      <NavLink to={`/edit/${i + 1}`} className='link1'>Edit</NavLink>
                      |
                      <NavLink to={`/delete/${i + 1}`} className='link1'>Delete</NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {this.pageNumber()}{this.state.pageChange ? <p>Fetching Data...</p> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Recordlist;