import React from 'react'
import './BookViewModal.css'
import bookingImg from '../../assets/book_viewing.png'

function BookViewModal({show, address, handleClose}) {
    const hideOrShow = show? "show" : "hide"

  return (
    <div className={`modal ${hideOrShow}`}>
        <div className="modal-main">
            <div className="modal-header">
                <h1>Book a Viewing</h1>
                <div>
                    <span class="close" onClick={handleClose}>&times;</span>
                    <img src={bookingImg} alt="booking"/>
                </div>
            </div>
            <p className="modal-address">{address?.address.street}, {address?.address.city}, {address?.address.postcode}</p>
            <div className="modal-input-container">
                <div className="modal-input">
                    <h3>Name</h3>
                    <input type="text" placeholder="Enter your name" required/>
                </div>
                <div className="modal-input">
                    <h3>Email</h3>
                    <input type="email" placeholder="Enter your email address" required/>
                </div>
                <div className="modal-input">
                    <h3>Phone Number</h3>
                    <input type="number" placeholder="Enter your phone number" required/>
                </div>
                <div className="message-input">
                    <h3>Message</h3>
                    <input type="text" placeholder="Enter your message"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookViewModal