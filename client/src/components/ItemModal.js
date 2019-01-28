import React ,{Component} from 'react';
import  {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends React.Component  {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    if(!this.state.name) {
      return
    }
    const newItem = {
      name: this.state.name
    }
  
    // Add item via  
    this.props.addItem(newItem);

    //close modal
    this.toggle()
  }
  render() {
    return (
      <div>
        <Button
        color = "dark"
        style = {{ margin: '2rem'}}
        onClick = { this.toggle}
        >
          Add item
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle = {this.toggle}
        >
          <ModalHeader toggle = {this.toggle}> Add to shoppingList</ModalHeader>
          <ModalBody>
            <Form onSubmit = {this.onSubmit}>
              <FormGroup>
                <Label for="item"> Item </Label>
                <Input
                  type ='text'
                  name = 'name'
                  placeholder = 'Add shopping Item'
                  onChange = {this.onChange}
                  >
                </Input>
                <Button
                  color = "dark"
                  style = {{marginTop: '2rem'}}
                  block
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>


      </div>
    );
  }

}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })( ItemModal )

