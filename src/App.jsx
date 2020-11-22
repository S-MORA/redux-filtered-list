import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadData, filterByValue} from "./store";

class App extends Component {
  componentDidMount() {
    //{count: 20} is our payload
    this.props.dispatch(loadData({count: 20}));
  }

  filterByInput(e) {
    let input = e.target.value;
    this.props.dispatch(filterByValue({value: input}))
  }

  render() {
    let products = this.props.state.filteredProducts;
    return (<div className="App">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1>
              Filtering with React-Redux
            </h1>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div>
            <div style={{
                alignItems: "center"
              }}>

              <div style={{
                  minWidth: "300px"
                }}>
                <input onChange={e => {
                    this.filterByInput(e);
                  }} style={{
                    width: "100%"
                  }} placeholder='Filter by' type='text'/>
              </div>
            </div>
          </div>


          <div style={{
              flexWrap: "wrap"
            }}>
            {
              products && products.length && products.map(product => (<div style={{
                  border: "1px solid black"
                }}>
                <div>
                  <p>
                    <b>Name:
                    </b>
                    {product.name}
                  </p>
                  <p>
                    <b>Price:
                    </b>
                    ${product.price}
                  </p>
                </div>
              </div>))
            }
          </div>
        </div>
      </section>
    </div>);
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(App);
