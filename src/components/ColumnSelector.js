import React, { Component } from 'react';

class ColumnSelector extends Component {

handleToggleColumn = column => {
    if (this.props.selectedColumns.indexOf(column) == -1) {
        this.props.addColumn(column)
    } else {
        this.props.removeColumn(column)
    }
}

render() {
    return (
        <div className="ColumnSelector">
            <h2>Column Selector</h2>
         {this.props.allColumns.map((column,index) => (
            <div key={index} className="Selector">
                <input type="checkbox" onClick={() => this.handleToggleColumn(column)} checked={this.props.selectedColumns.indexOf(column) != -1}/>{column}
            </div>
            ))}
        </div>
    );
  }
}

export default ColumnSelector;