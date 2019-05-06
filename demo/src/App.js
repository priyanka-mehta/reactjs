import React, { Component } from 'react';
import './App.css'
import { Button } from 'reactstrap';
import { FaSortUp, FaSortDown, FaTimes } from 'react-icons/fa';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableColumns: [],
      selectedColumns: [],
      tempAvailableColumns: [],
      tempSelectedColumns: []
    };
    this.cols = [
      { name: '1Annual Revenue', value: 'Annual_Revenue', index: 1 },
      { name: '2City', value: 'City', index: 2 },
      { name: '3Company', value: 'Company', index: 3 },
      { name: '4Country', value: 'Country', index: 4 },
      { name: '5Created By', value: 'Created_By', index: 5 },
      { name: '6Created Time', value: 'Created_Time', index: 6 },
      { name: '7Description', value: 'Description', index: 7 },
      { name: '8Email', value: 'Email', index: 8 },
      { name: '9Email Opt Out', value: 'Email_Opt_Out', index: 9 },
      { name: '10Fax', value: 'Fax', index: 10 },
      { name: '11First Name', value: 'First_Name', index: 11 },
      { name: '12Full Name', value: 'Full_Name', index: 12 },
      { name: '13Industry', value: 'Industry', index: 13 },
    ]
  }

  componentWillMount() {
    this.setState({ availableColumns: this.cols })
  }
  availableColumn(col) {
    console.log(col.name);
    
    const tempAvailableColumns = [...this.state.tempAvailableColumns];
    
    if (tempAvailableColumns.indexOf(col.name) == -1) {
      let obj = {}
      obj['name'] = col.name;
      obj['value'] = col.value;
      obj['index'] = col.index
      tempAvailableColumns.push(obj)
      //tempAvailableColumns.push(name)
    }
    this.setState({ tempAvailableColumns })
  }
  addColumn() {
    const tempAvailableColumns = [...this.state.tempAvailableColumns];
    const availableColumns = [...this.state.availableColumns];
    const selectedColumns = [...this.state.selectedColumns]

    selectedColumns.push(...this.state.tempAvailableColumns)
    this.setState({ selectedColumns: selectedColumns, tempAvailableColumns: [] })
    const filtered_availableCol = availableColumns.filter(x => !tempAvailableColumns.includes(x))
    this.setState({ availableColumns: filtered_availableCol })
  }
  selectedColumn(col) {
    const tempSelectedColumns = [...this.state.tempSelectedColumns];
    if (tempSelectedColumns.indexOf(col) == -1) {
      tempSelectedColumns.push(col)
    }
    this.setState({ tempSelectedColumns })
  }
  removeColumn() {
    const availableColumns = [...this.state.availableColumns];
    const tempSelectedColumns = [...this.state.tempSelectedColumns];

    const selectedColumns = [...this.state.selectedColumns]
    availableColumns.push(...this.state.tempSelectedColumns)

    this.setState({ availableColumns: availableColumns, tempSelectedColumns: [] })
    const filtered_selectedCol = selectedColumns.filter(x => !tempSelectedColumns.includes(x))
    this.setState({ selectedColumns: filtered_selectedCol })
  }

  render() {
    
    return (
      <div className='wrapper'>
        <div className='column-left'>
          <h3>Available Column</h3>
          {this.state.availableColumns.map((col) => {
            return (
              <div
                onClick={() => this.availableColumn(col)}
                key={col.index}
              >
                {col.name}
              </div>
            )
          })}
        </div>
        <div className='button'>
          <Button color='primary' onClick={() => this.addColumn()}>Add</Button>
        </div>
        <div className='column-right'>
          {this.state.selectedColumns.map((col) => {
            return (
              <>
                <div onClick={() => this.selectedColumn(col)}
                  key={col.index}
                >
                  {col.name}
                </div>
              </>
            )
          })}
        </div>
        <div className='buttons'>
          <button className='fa-icons'>
            <FaSortUp />
          </button>
          <button className='fa-icons'>
            <FaSortDown />
          </button>
          <button onClick={() => this.removeColumn('remove')} className='fa-icons'>
            <FaTimes />
          </button>
        </div>
      </div>
    )
  }
}
export default App;