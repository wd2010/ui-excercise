import React, { Component } from 'react';
import ReactList from 'react-list';

let styles={
  display:'flex',
  textAlign:'left',

}
class DataTable extends Component {
  constructor(props){
    super(props);
    this.renderItem=this.renderItem.bind(this)
  }
  renderItem(index, key) {
    let data = this.props.data;
    let selectedColumns=this.props.selectedColumns;

    return (
      <div key={index} style={styles}>
        {
          selectedColumns.map((item,idx)=>(
            <span style={{width:'100px'}}  key={idx}>{data[index][item]}</span>
          ))
        }
      </div>
    )
  }


  render() {
    return (
      <div>
        <div style={styles}>
          {
            this.props.selectedColumns.map((item,index)=>(
              <span style={{width:'100px'}}  key={index}>{item}</span>
            ))
          }
        </div>
        <div style={{overflow: 'auto', maxHeight: '100vh'}}>
          <ReactList
            itemRenderer={this.renderItem}
            length={this.props.data.length}
          />
        </div>
      </div>
    );
  }
}

export default DataTable;