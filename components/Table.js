'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      const table = this.props.table
      <table className='table'>
        <tbody>
          {
            table.map((value, index) => {
              <Row />
            })
          }
        </tbody>
      </table>
    )
  }
}
