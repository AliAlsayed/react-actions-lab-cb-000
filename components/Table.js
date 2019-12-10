'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    const table = this.props.table
    return (
      <table className='table'>
        <tbody>
          {
            table.map((value, index) =>{
              <Cell />
            })
          }
        </tbody>
      </table>
    )
  }
}
