import React, { useState } from 'react';
import { Send, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/contact' 
        : 'http://localhost:5001/api/contact';
      await axios.post(apiUrl, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="section-description">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Gujarat, India.</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>udaysavaliya2004@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    <a
                      href="https://github.com/Udaysavaliya04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/uday-savaliya-b30bb7286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn">
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="form-message success">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="form-message error">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
