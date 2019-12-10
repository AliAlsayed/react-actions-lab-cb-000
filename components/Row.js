'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return (
      <tr className='row'>
        {
          this.props.row.map((value, i) =>
            <Cell key={i} cell={value} />
          )
        }
      </tr>
    )
  }
}
