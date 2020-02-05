import React , { useState } from 'react'
import { Container} from 'react-bulma-components';

const UpdateProfile = (props) =>{

  return (
      <div className={ props.isActive ? 'modal is-active' : 'modal' }>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit profile</p>
            <button className="delete" aria-label="close" onClick={ e => props.setIsActive(false) } ></button>
          </header>
          <section className="modal-card-body">
             Content 
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button "
                    onClick={ e => props.setIsActive(false) }
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>

    )
}


export default UpdateProfile;