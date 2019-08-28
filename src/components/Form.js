import React from 'react';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="border flex flex-1 flex-col px-4 py-8 relative w-full">
        <h2 className="font-semibold font-serif leading-tight mb-6 text-2xl text-center uppercase">
          Get in touch
        </h2>
        <form
          action="/success/"
          className="flex flex-1 flex-col w-full"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
          name="contact"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input name="form-name" type="hidden" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input
                id="bot-field"
                name="bot-field"
                onChange={this.handleChange}
              />
            </label>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="flex items-end" htmlFor="name">
              <span className="sr-only">Name</span>
              <input
                className="appearance-none bg-white border border-gray-400 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:bg-gray-100"
                id="name"
                name="name"
                onChange={this.handleChange}
                placeholder="Name:"
                required
                type="text"
              />
            </label>
          </div>

          {/* Email address */}
          <div className="mb-6">
            <label className="flex items-end" htmlFor="email">
              <span className="sr-only">Email</span>
              <input
                className="appearance-none bg-white border border-gray-400 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:bg-gray-100"
                id="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Email address:"
                required
                type="email"
              />
            </label>
          </div>

          {/* Phone number */}
          <div className="mb-6">
            <label className="flex items-end" htmlFor="phone">
              <span className="sr-only">Phone number</span>
              <input
                className="appearance-none bg-white border border-gray-400 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:bg-gray-100"
                id="phone"
                name="phone"
                onChange={this.handleChange}
                placeholder="Phone number:"
                type="text"
              />
            </label>
          </div>

          {/* Message */}
          <div className="flex flex-1 mb-6">
            <label className="flex w-full" htmlFor="message">
              <span className="sr-only">Message</span>
              <textarea
                className="appearance-none bg-white border border-gray-400 flex flex-1 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:bg-gray-100"
                id="message"
                name="message"
                placeholder="Message:"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div className="flex justify-center">
            {/* Submit */}
            <button
              className="border border-gray-500 inline-block leading-none px-4 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
