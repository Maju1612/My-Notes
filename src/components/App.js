import React from 'react'
import './App.css';
import Menu from './Menu'
import NotePanel from './NotePanel'
import Notes from './Notes'
import {
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    newCategory: "- wybierz kategorię -",
    newText: "",
    isEmpty: true,
    errorInfo: false,
    id:0,
    notes: []
  }

  checkInput = () => {
    if (this.state.newText !== "" && this.state.newCategory !== "- wybierz kategorię -") {
      this.setState({
        isEmpty: false,
      })
    } else {
      this.setState({
        isEmpty: true,
      })
    }
  }

  handleExitNote = () => {
    this.setState({
      newText: "",
      newCategory: "- wybierz kategorię -",
      isEmpty: true,
      errorInfo: false
    })
  }

  handleAddNote = () => {
    if (this.state.newText !== "" && this.state.newCategory !== "- wybierz kategorię -") {
      const notes = this.state.notes;
      let id = this.state.id + 1;
      notes.push({
        category: this.state.newCategory,
        text: this.state.newText,
        id: this.state.id
      })
      this.setState({
        notes,
        newText: "",
        id,
        isEmpty: true,
        errorInfo: false
      })
    } else {
      this.setState({
        errorInfo: true
      })
    }
  }
  handelDeleteButton = id => {
    let notes = [...this.state.notes];
    notes = notes.filter(note => note.id !== id);
    this.setState({
      notes,
    })
  }

  handleDeleteAllNotes = () => {
    this.setState({
    notes:[]
  })
  }
  handleChangeText = e => {
    this.checkInput()
    this.setState({
      newText:e.target.value
    })
  }

  handleChangeCategory = e => {
    this.checkInput()
    this.setState({
      newCategory:e.target.value
    })
  }

  render() {
    return (
      <>
        <Route path="/">
          <Menu clickDeleteAll={this.handleDeleteAllNotes}/>
          <Notes notes={this.state.notes} clickDelete={this.handelDeleteButton}/>
        </Route>
        <Route path="/add">
          <NotePanel errorInfo={this.state.errorInfo} isEmpty={this.state.isEmpty} clickAdd={this.handleAddNote} clickExit={this.handleExitNote} changeText={this.handleChangeText} changeCategory={this.handleChangeCategory} newText={this.state.newText} newCategory={this.state.newCategory} />
        </Route>
        </>
    );
  }
}
export default App;
