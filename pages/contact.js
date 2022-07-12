import { useState } from "react";
import { Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { H1 } from "../components/H1.styled";
import styles from "../styles/Contact.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Contact = () => {
  // country code picker state
  const [value, setValue] = useState();
  const [modal, setModal] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  return (
    <>
      {/* Modal for Sales Contact */}
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <h1 className="text-center mt-4">Contact us</h1>
        <div className="text-center mt-4 me-4 ms-4">
          <p>
            Let’s get this conversation started. Tell us your thoughts, and
            we’ll get in touch as soon as we can.
          </p>
        </div>
        <div className="form mt-4 ms-4 me-4">
          <form>
            <div className="row">
              <div className="col mt-4">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col mt-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div className="form-group mt-3 ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="row mobileNumber mt-3 ">
              <label htmlFor="exampleFormControlTextarea1">Mobile Number</label>
              <div className="col ">
                <PhoneInput
                  value={value}
                  onChange={setValue}
                  style={{ height: "44px", border: "1px solid #CED4DA" }}
                />
              </div>
            </div>
            <div className="form-group mt-3 ">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="text-center mt-3 mb-3">
              <button
                type="button"
                className="btn btn-dark ps-5 pe-5 pt-2 pb-2"
              >
                Contact Sales
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal for Contact support */}
      <Modal size="md" isOpen={modalTwo} toggle={() => setModalTwo(!modalTwo)}>
        <h1 className="text-center mt-4">Contact Support</h1>
        <div className="text-center mt-4 me-4 ms-4">
          <p>
            We’re here for you. Let us know your thoughts, and we’ll get in
            touch as soon as we can.
          </p>
        </div>
        <div className="form mt-4 ms-4 me-4">
          <form>
            <div className="row">
              <div className="col mt-4">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col mt-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div className="form-group mt-3 ">
              <label htmlFor="exampleInputEmail1">Work Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="row mobileNumber mt-3 ">
              <label htmlFor="exampleFormControlTextarea1">Phone Number</label>
              <div className="col">
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="" />
              </div>
            </div>
            <div className="form-group mt-3 ">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="text-center mt-3 mb-3">
              <button
                type="button"
                className="btn btn-dark ps-5 pe-5 pt-2 pb-2"
              >
                Contact Support
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className={styles.container}>
        <H1>Contact Us</H1>
      </div>
      <div className={styles.contactBody}>
        <div className={styles.leftBody}>
          <div className={styles.leftCard}>
            <H1>Advertise</H1>
            <p>
              Speak to our sales team to see how we can help grow your brand.
            </p>
            <button onClick={() => setModal(true)}>Contact Sales</button>
          </div>
        </div>
        <div className={styles.rightBody}>
          <div className={styles.rightCard}>
            <H1>Support</H1>
            <p>Have a question? Need Help? Feel free to drop us a message.</p>
            <button onClick={() => setModalTwo(true)}>Contact Support</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
