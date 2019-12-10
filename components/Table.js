'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className='table'>
        <tbody>
          {
            this.props.table.map((value, index) =>{
              return <Cell />
            })
          }
        </tbody>
      </table>
    )
  }
}
