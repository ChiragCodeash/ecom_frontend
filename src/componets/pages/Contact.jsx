import React from "react";
const Contact = ({ title }) => {
  document.title = title;
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.438651880912!2d72.83754947587602!3d21.214447381373738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20Icon!5e0!3m2!1sen!2sin!4v1703832235435!5m2!1sen!2sin";
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="contact-us container">
          <div className="mw-930">
            <h2 className="page-title gclass-text">CONTACT US</h2>
          </div>
        </section>
        <section className="google-map mb-5">
          <iframe
            src={map}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        {/* <Map/> */}
        <section className="contact-us container">
          <div className="mw-930">
            <div className="row mb-5">
              <div className="col-lg-6 ">
                <h3 className="mb-4 gclass-text">Store in London</h3>
                <p className="mb-4 gclass-text">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622
                  <br />
                  United Kingdom
                </p>
                <p className="mb-4 gclass-text">
                  sale@uomo.com
                  <br />
                  +44 20 7123 4567
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="mb-4 gclass-text">Store in Istanbul</h3>
                <p className="mb-4 gclass-text">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622
                  <br />
                  Turky
                </p>
                <p className="mb-4 gclass-text">
                  sale@uomo.com
                  <br />
                  +90 212 555 1212
                </p>
              </div>
            </div>
            <div className="contact-us__form">
              <form
                name="contact-us-form"
                className="needs-validation gclass-form"
                noValidate=""
              >
                <h3 className="mb-5">Get In Touch</h3>
                <div className="form-floating my-4">
                  <input
                    type="text"
                    className="form-control"
                    id="contact_us_name"
                    placeholder="Name *"
                    required=""
                  />
                  <label htmlFor="contact_us_name">Name *</label>
                </div>
                <div className="form-floating my-4">
                  <input
                    type="email"
                    className="form-control"
                    id="contact_us_email"
                    placeholder="Email address *"
                    required=""
                  />
                  <label htmlFor="contact_us_name">Email address *</label>
                </div>
                <div className="my-4">
                  <textarea
                    className="form-control form-control_gray"
                    placeholder="Your Message"
                    cols={30}
                    rows={8}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-4">
                  <button type="submit" className="btn btn-primary gclass-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </>
  );
};

export default Contact;
