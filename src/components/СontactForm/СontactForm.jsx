import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContact = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitContact = e => {
    e.preventDefault();
    //   console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitContact}>
        <h2>Name</h2>
        <label>
          <input
            value={this.state.name}
            onChange={this.handleContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов.
             Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <h2>Number</h2>
        <label>
          <input
            value={this.state.number}
            onChange={this.handleContact}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы,
             тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}
