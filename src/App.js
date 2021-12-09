import "./App.css";
import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", phoneNumber: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", phoneNumber: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", phoneNumber: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", phoneNumber: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    console.log("DidMount contacts", contacts);
    const parsedContacts = JSON.parse(contacts);
    console.log("DidMount parsedContacts", parsedContacts);

    if (parsedContacts && parsedContacts.length > 0) {
      this.setState({ contacts: [...parsedContacts] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    // const prevContacts = prevState.contacts;

    // if (nextContacts !== prevContacts) {
    localStorage.setItem("contacts", JSON.stringify(nextContacts));
    // }
  }

  addContact = () => {
    if (
      this.state.contacts.find((contact) => {
        return contact.name === this.state.name;
      })
    ) {
      alert(`${this.state.name} is already in contacts!`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
      };
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  delContact = (e) => {
    const elementToDel = this.state.contacts.find(
      (item) => item.id === e.target.id
    );
    const index = this.state.contacts.indexOf(elementToDel);
    this.state.contacts.splice(index, 1);
    this.setState({ contacts: [...this.state.contacts] });
  };

  nameChange = (e) => {
    return this.setState({ name: e.target.value });
  };

  phoneChange = (e) => {
    return this.setState({ phoneNumber: e.target.value });
  };

  filterFunc = (e) => {
    return this.setState({ filter: e.target.value });
  };

  getFilteredElems = () => {
    const normalizedElem = this.state.filter.toLowerCase();
    const stateNormElems = this.state.contacts.filter((elem) => {
      return elem.name.toLowerCase().includes(normalizedElem);
    });
    return stateNormElems;
  };

  render() {
    const filteredContact = this.getFilteredElems();

    return (
      <div className="container">
        <ContactForm
          addContact={this.addContact}
          nameChange={this.nameChange}
          phoneChange={this.phoneChange}
        />
        <Filter filter={this.filterFunc} />
        <ContactList contacts={filteredContact} delContact={this.delContact} />
      </div>
    );
  }
}

export default App;
