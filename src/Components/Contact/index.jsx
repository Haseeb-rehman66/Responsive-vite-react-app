import { useFormik } from "formik";
import React from "react";
import { styled } from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  `;

const formik = useFormik(
  {
    initialValues:{
      name: "",
      email: ""
    },
    onSubmit: (values) => {

      console.log(values);

    }
  }
);


// console.log(formik.values);



  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13262.780458352552!2d72.721527!3d33.7943706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1689054320704!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

<div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>



    </Wrapper>
  );
};

export default Contact;
