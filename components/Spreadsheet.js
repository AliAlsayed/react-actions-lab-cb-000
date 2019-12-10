'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null,
      table: [['']]
    };

    this.handleAddColumn = actions.addColumn.bind(this);
    this.handleRemoveColumn = actions.removeColumn.bind(this);
    this.handleAddRow = actions.addRow.bind(this);
    this.handleRemoveRow = actions.removeRow.bind(this);
    this.handleChangeCell = actions.changeCell.bind(this);
    this.handleFocusCell = actions.focusCell.bind(this);
    this.handleBlurCell = actions.blurCell.bind(this);
  }


  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn}>Add Column</button>
          {' '}
          <button onClick={this.handleAddRow}>Add Row</button>
          {' '}
          <button onClick={this.handleRemoveColumn}>Remove Column</button>
          {' '}
          <button onClick={this.handleRemoveRow}>Remove Row</button>
        </div>

        <Table table={this.state.table} />

        <div className='spreadsheet__focused'>
          {}
        </div>
      </div>
    );
  }
}
