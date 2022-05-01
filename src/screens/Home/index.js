import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { Component } from "react";
import ListItem from "../../components/ListIem";

class Home extends Component {
  state = {
    value: "",
    items: [
      {
        title: "Yazn",
        id: Math.random() * 1000,
      },
      {
        title: "Yazn",
        id: Math.random() * 1000,
      },
      {
        title: "Moath",
        id: Math.random() * 1000,
      },
      {
        title: "Husam",
        id: Math.random() * 1000,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAdd = () => {
    this.setState({
      items: [
        {
          title: this.state.value,
          id: Math.random() * 20000,
        },
        ...this.state.items,
      ],
      value: ''
    });
  };


  handleDelete = (id) => {
    console.log(id);
    let newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: newItems
    })
    };

  render() {
    return (
      <div className={"inner-container"}>
        <h1>To Do List App</h1>
        <InputBox
          value={this.state.value}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}

        />
        <List items={this.state.items}
              handleDelete = {this.handleDelete}

        />
        {/*<ListItem handleDelete={this.handleChange()} />*/}
      </div>
    );
  }
}

export default Home;
