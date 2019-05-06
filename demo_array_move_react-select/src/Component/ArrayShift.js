import React, { Component } from 'react';
import _ from 'lodash';

class ArrayShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: [],
      selectedSubject: [],
      tempAvailableSubjectList: [],
      tempSelectedSubject: [],
      moveColumn: {}
    };
    this.subject = [
      { id: 1, name: '1.JAVA' },
      { id: 2, name: '2.ReactJS' },
      { id: 3, name: '3.AngularJS' },
      { id: 4, name: '4.NodeJS' },
      { id: 5, name: '5.VueJS' },
      { id: 6, name: '6.PHP' },
      { id: 7, name: '7.ROR' },
      { id: 8, name: '8.GO' }
    ]
  }

  componentWillMount() {
    this.setState({ subjectList: this.subject })
  }

  onClickAvailable(sub) {
    const tempAvailableSubjectList = [...this.state.tempAvailableSubjectList];
    if (tempAvailableSubjectList.find(i => i.id === sub.id)) {
      return ''
    }
    else {
      let column = {};
      column['id'] = sub['id']
      column['name'] = sub['name']
      tempAvailableSubjectList.push(column)
      this.setState({ tempAvailableSubjectList })
    }
  }
  onAddButtonClick() {
    const subjectList = [...this.state.subjectList];
    const tempAvailableSubjectList = [...this.state.tempAvailableSubjectList]

    const selectedSubject = [...this.state.selectedSubject, ...tempAvailableSubjectList] //Push columns from tempAvailableSubjectList to selectedSubject
    const finalAvailableSubject = subjectList.filter(x => !tempAvailableSubjectList.find(y => x.id === y.id))

    this.setState({
      subjectList: finalAvailableSubject,
      selectedSubject: selectedSubject,
      tempAvailableSubjectList: []
    })
  }

  onClickSelected(sub) {
    const tempSelectedSubject = [...this.state.tempSelectedSubject];
    if (tempSelectedSubject.find(i => i.id === sub.id)) {
      return ''
    }
    else {
      let column = {};
      column['id'] = sub['id']
      column['name'] = sub['name']
      tempSelectedSubject.push(column)
      this.setState({ tempSelectedSubject, moveColumn: column })
    }
  }

  onClickCancelButton() {
    const selectedSubject = [...this.state.selectedSubject];
    const tempSelectedSubject = [...this.state.tempSelectedSubject]

    const temp = [...this.state.subjectList, ...tempSelectedSubject]
    const FinalsubjectList = _.sortBy(temp, 'id')
    const finalSelectedSubject = selectedSubject.filter(x => !tempSelectedSubject.find(y => x.id === y.id));

    this.setState({
      selectedSubject: finalSelectedSubject,
      subjectList: FinalsubjectList,
      tempSelectedSubject: [],
      moveColumn: {}
    })
  }

  arrayMoveUp() {
    const { selectedSubject, moveColumn } = this.state;
    const index = _.indexOf(selectedSubject, selectedSubject.find(i => i.id === moveColumn.id))

    let prevIndex = (index - 1 + selectedSubject.length) % selectedSubject.length;
    selectedSubject.splice(prevIndex, 0, selectedSubject.splice(index, 1)[0]);
    this.setState({ selectedSubject: selectedSubject })

  }

  render() {
    const { subjectList, selectedSubject, tempAvailableSubjectList, moveColumn } = this.state;
    return (
      <div >
        <center>
          <table border='2' id='left'>
            <tbody>
              {subjectList.map((i) =>
                <tr key={i.id}>
                  <td onClick={() => this.onClickAvailable(i)}>{i.name}</td>
                </tr>
              )}
            </tbody>
          </table>

          <button disabled={!tempAvailableSubjectList[0]} onClick={() => this.onAddButtonClick()}>
            Add
          </button>

          <table border='2' id='right'>
            <tbody>
              {selectedSubject.map((i) =>
                <tr key={i.id}>
                  <td onClick={() => this.onClickSelected(i)}>{i.name}</td>
                </tr>
              )}
            </tbody>
          </table>

          <button disabled={!moveColumn.name} onClick={() => this.onClickCancelButton()}>
            Remove
          </button>

          <button disabled={!moveColumn.name} onClick={() => this.arrayMoveUp()}>
            Up^
          </button>
        </center>
      </div>
    );
  }
}

export default ArrayShift;

