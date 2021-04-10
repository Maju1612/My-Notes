import React from 'react';
import Button from './Button'

const Menu = props => {
    return (
          <div className="menu">
          <h1><i className="fas fa-sticky-note"></i> MyNotes</h1>
          <div className="menu-buttons">
                <Button
                    btnClass="add"
                    iClass="fas fa-plus"
                    text=" Dodaj"
                    linkTo="/add"
                />
                 <Button
                    btnClass="delete-all"
                    iClass="fas fa-trash-alt"
                    text=" Usuń wszystkie"
                    linkTo="/"
                    click={props.clickDeleteAll}
                />
          </div>
        </div>
    );
}

export default Menu;
