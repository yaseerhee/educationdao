import React, { useState } from 'react';

const Contribute = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    wallet: '',
    roles: [],
    topics: '',
    portfolio: '',
    acknowledgement: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.wallet) {
      errors.wallet = 'Wallet address is required';
    }
    if (formData.roles.length === 0) {
      errors.roles = 'At least one role is required';
    }
    if (!formData.topics) {
      errors.topics = 'Topics are required';
    }
    if (!formData.portfolio) {
      errors.portfolio = 'Portfolio link is required';
    }
    if (!formData.acknowledgement) {
      errors.acknowledgement = 'Acknowledgement is required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'acknowledgement') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === 'checkbox') {
      const newRoles = checked
        ? [...formData.roles, value]
        : formData.roles.filter((role) => role !== value);
      setFormData((prevData) => ({
        ...prevData,
        roles: newRoles,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzfke6sOON9iXVwuQa00LE1OijSS1gX-dn4d1XBmRKSSCw7EZRD2KJPVXE29puvHgZemA/exec'; // Replace with your Google Apps Script URL
    const data = new URLSearchParams(formData);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
      setSuccess(true);
      setFormData({
        email: '',
        name: '',
        wallet: '',
        roles: [],
        topics: '',
        portfolio: '',
        acknowledgement: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'An error occurred while submitting the form. Please try again later.' });
    }
  };

  return (
    <div className="bg-dark-purple py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-black p-8 rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Work With Us</h2>
        <p className="text-lg mb-8 text-white text-center">
          If you are interested in contributing to Education DAO, please fill out the form below.
        </p>
        {success && <p className="text-green-500 text-center mb-4">Form submitted successfully!</p>}
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-left mb-2 text-lg text-white" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-left mb-2 text-lg text-white" htmlFor="name">Name of contributor (or handle)</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-left mb-2 text-lg text-white" htmlFor="wallet">Wallet address</label>
            <input
              type="text"
              id="wallet"
              name="wallet"
              value={formData.wallet}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {errors.wallet && <p className="text-red-500 text-sm mt-1">{errors.wallet}</p>}
          </div>
          <div>
            <label className="block text-left mb-2 text-lg text-white">What role are you interested in? Select all that apply.</label>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center text-white">
                <input
                  type="checkbox"
                  name="roles"
                  value="Writer"
                  checked={formData.roles.includes('Writer')}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2">Writer</span>
              </label>
              <label className="inline-flex items-center text-white">
                <input
                  type="checkbox"
                  name="roles"
                  value="Editor"
                  checked={formData.roles.includes('Editor')}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2">Editor</span>
              </label>
              <label className="inline-flex items-center text-white">
                <input
                  type="checkbox"
                  name="roles"
                  value="Translator"
                  checked={formData.roles.includes('Translator')}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2">Translator</span>
              </label>
            </div>
            {errors.roles && <p className="text-red-500 text-sm mt-1">{errors.roles}</p>}
          </div>
          <div className="col-span-2">
            <label className="block text-left mb-2 text-lg text-white" htmlFor="topics">What topics in particular do you want to create content about?</label>
            <input
              type="text"
              id="topics"
              name="topics"
              value={formData.topics}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {errors.topics && <p className="text-red-500 text-sm mt-1">{errors.topics}</p>}
          </div>
          <div className="col-span-2">
            <label className="block text-left mb-2 text-lg text-white" htmlFor="portfolio">Link(s) to portfolio or samples of your work</label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {errors.portfolio && <p className="text-red-500 text-sm mt-1">{errors.portfolio}</p>}
          </div>
          <div className="col-span-2">
            <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                name="acknowledgement"
                checked={formData.acknowledgement}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-purple-600"
              />
              <span className="ml-2">By selecting "Yes" you acknowledge that content submitted to Education DAO is subject to a review process, and that not all content submitted is guaranteed to be to be published.</span>
            </label>
            {errors.acknowledgement && <p className="text-red-500 text-sm mt-1">{errors.acknowledgement}</p>}
          </div>
          {errors.form && <p className="text-red-500 text-sm mt-1">{errors.form}</p>}
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-purple-700 text-white px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contribute;
