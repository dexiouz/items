import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
// import { connect } from 'react-redux';
// import { getItems, deleteItem } from '../actions/itemActions';
// import propTypes from 'prop-types';

class ShoppingList extends Component {
  // componentDidMount(){
  //   this.props.getItems();
  // };

  // onDeleteClick = (id) => {
  //   this.props.deleteItem(id);
  // };

  state = {
    items: [
      {id: uuid(), name: 'eggs'},
      {id: uuid(), name: 'milk'},
      {id: uuid(), name: 'spoon'},
      {id: uuid(), name: 'grocery'}
    ]
  }
  render() {
    // const { items } = this.props.item;
    const { items } = this.state;

    return (
      <Container>
        <Button 
          color="dark"
          style = {{marginBottom: '2rem'}}
          onClick = {() => {
            const name = prompt('Enter item');
            if(name){
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }))
            }
          }}  
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className = "shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn"
                    color="danger"
                    size ="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id )
                      }));
                    }}  
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
        {/* <ListGroup>
          <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={5000} classNames="fade">
                <ListGroupItem>
                  <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
        </ListGroup> */}
      </Container>
    );
  }
}

export default ShoppingList;
// ShoppingList.propTypes = {
//   getItems: propTypes.func.isRequired,
//   item: propTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   item: state.item
// })

// export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList); 