import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ListTable extends Component {
  render() {
    const { apiArrayData, removeList } = this.props
    return(
      <div class="container">
        <div class="row justify-content-md-center">
         <div class="col col-lg-8">

           <ul>
         <li>{apiArrayData.slice(200)} </li>
         </ul>
         
      <Table className="list-box">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Title</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiArrayData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td><button value={item.id} onClick={removeList}>X</button></td>
                </tr>
              ))}
            </tbody>
          </Table>

          </div>
        </div>
      </div>

    )
  }
}

export default ListTable;
