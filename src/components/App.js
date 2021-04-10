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
    newText:"",
    notes: [
      {
        category: "Zakupy",
        text:"Kaszanka"
      },
      {
        category: "Zakupy",
        text:"Kaszanka"
      },
      {
        category: "Zakupy",
        text:"Kaszanka"
      }
    ]
  }

  handleAddNote = () => {
    const notes = this.state.notes;
    notes.push({
      category: this.state.newCategory,
      text: this.state.newText,
      newText: "",
      newCategory:""
    })
    this.setState({
    notes
  })
  }
  
  handleDeleteAllNotes = () => {
    this.setState({
    notes:[]
  })
  }
  handleChangeText = e => {
    this.setState({
      newText:e.target.value
    })
  }

  handleChangeCategory = e => {
    this.setState({
      newCategory:e.target.value
    })
  }

  render() {
    return (
      <>
        <Route path="/">
          <Menu clickDeleteAll={this.handleDeleteAllNotes}/>
          <Notes notes={this.state.notes}/>
        </Route>
        <Route path="/add">
          <NotePanel clickAdd={this.handleAddNote} changeText={this.handleChangeText} changeCategory={this.handleChangeCategory} newText={this.state.newText} newCategory={this.state.newCategory}/>
        </Route>
        </>
    );
  }
}
export default App;
