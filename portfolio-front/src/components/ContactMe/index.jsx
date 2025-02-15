import { Component } from "react";
import { motion } from "framer-motion";
// import { FaPhoneAlt } from "react-icons/fa";
import "./index.css";

import axios from "axios";

class ContactMe extends Component {
  state = {
    inquiredBy: "",
    email: "",
    contactNo: "",
    message: "",
    isEmpty: false,
  };

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  setInquiredBy = (e) => {
    this.setState({ inquiredBy: e.target.value });
  };

  setNumber = (e) => {
    this.setState({ contactNo: e.target.value });
  };

  setMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  sendData = async () => {
    const { inquiredBy, email, contactNo, message } = this.state;
    const data = {
      inquiredBy,
      email,
      contactNo,
      message,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contactMe`,
        data,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.status === 201) {
        alert("Request Sent Successfully");
      }
    } catch (error) {
      alert("Something Went Wrong");
      console.error(error);
    }
  };

  submitForm = async (e) => {
    e.preventDefault();
    const { inquiredBy, email, contactNo, message } = this.state;

    if (
      inquiredBy === "" ||
      email === "" ||
      contactNo === "" ||
      message === ""
    ) {
      this.setState({ isEmpty: true });
    } else {
      this.sendData();
    }
  };

  render() {
    const { inquiredBy, email, contactNo, message, isEmpty } = this.state;
    const { theme } = this.props;
    return (
      <div className={`form-container-${theme}`} id="contactMe">
        <h1 className="section-title">CONTACT</h1>
        <motion.div
          className={`form-container-${theme}`}
          initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
          whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
          viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form onSubmit={this.submitForm} className="form">
            <div className="">
              <input
                value={inquiredBy}
                id="name"
                placeholder="Name"
                onChange={this.setInquiredBy}
                className="form-input"
                required
              />
            </div>
            <div className="">
              <input
                value={email}
                id="email"
                onChange={this.setEmail}
                required
                className="form-input"
                placeholder="Email"
              />
            </div>
            <div className="">
              <input
                value={contactNo}
                id="number"
                onChange={this.setNumber}
                className="form-input"
                required
                placeholder="Contact Number"
              />
            </div>
            <div className="">
              <textarea
                value={message}
                id="message"
                onChange={this.setMessage}
                className="form-textArea"
                placeholder="Message"
                required
              ></textarea>
            </div>
            {isEmpty ? <p>"Please Fill the required Details"</p> : ""}
            <div className="send_btn-container">
              <button type="submit" className="send_btn">
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }
}

export default ContactMe;
