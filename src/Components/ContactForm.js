import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleopone"
        method="POST"
      >
        
        <input type="text" className="input-text" name="name" placeholder="Your Name"  /><br />
    <input type="text" className="input-text" name="_replyto" placeholder="Your Email"  /><br /><br />
 
 
    <textarea name="message" rows="8" cols="40" placeholder="Message"  ></textarea><br /><br />
        {status === "SUCCESS" ? <p>Thanks! Your message was successfully submitted.</p> : <button className="submit-button">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}