import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map(p => {
            return (
              <Pizza pizza={p} key={p.id} selectPizza={this.props.selectPizza} deletePizza={this.props.deletePizza} />
            )
          })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
