"use client";
import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const TalkArea = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backtesting.selsla.net/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#e6e500",
          confirmButtonText: "Close",
          allowOutsideClick: false,
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire("Failed to send data. Please try again.", "", "error");
      }
    } catch (error) {
      Swal.fire("Network error. Please try again.", "", "error");
    }
  };

  return (
    <div className="talk-area ptb-100 overflow-hidden">
      <div className="container overflow-hidden">
        <div className="row align-items-center">
          {/* Left image side */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="talk-image relative overflow-hidden">
              <ExportedImage
                src="/images/talkT.png"
                alt="Talk Image"
                width={546}
                height={557}
                unoptimized={true}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "546px",
                }}
              />
              <div className="talk-circle absolute bottom-[-30px] right-[-30px] max-w-[120px] overflow-hidden">
                <ExportedImage
                  src="/images/talk-circle.png"
                  alt="Circle Image"
                  width={120}
                  height={120}
                  unoptimized={true}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "120px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right content side */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="talk-content relative z-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="talk-bg-text absolute top-0 left-0 text-gray-100 text-6xl font-bold opacity-10 pointer-events-none max-w-full overflow-hidden whitespace-nowrap">
                LET'S TALK
              </div>

              <span className="block text-sm text-gray-500">Let's Talk</span>
              <h3 className="text-xl font-semibold">
                We'd like to hear from you any inquiry
              </h3>
              <p className="mb-4 text-gray-600">
                We're here to help with all your inquiries and questions. Don't
                hesitate to contact us anytime for the support you need.
              </p>

              {/* Contact Form */}
              <form id="contactFormTwo" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        required
                        value={form.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        cols="30"
                        rows="6"
                        required
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Write your message..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <button type="submit" className="default-btn">
                      Send Message <span></span>
                    </button>
                    <div
                      id="msgSubmitTwo"
                      className="h3 text-center hidden"
                    ></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkArea;