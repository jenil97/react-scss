import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import '../styles/Footer.scss'; 

const Footer = () => {
  return (
    <section className="footer">
      <div className="carts">
        <ul className="cart-ul">
          <li>
            <Link to="/">Most Asked Questions</Link>
          </li>
          <li>
            <Link to="/">What We Do ?</Link>
          </li>
          <li>
            <Link to="/">History of Company</Link>
          </li>
          <li>
            <Link to="/">Our Clients</Link>
          </li>
          <li>
            <Link to="/">Market Place</Link>
          </li>
        </ul>

        <form className="form-2">
          <label>Your Name</label>
          <input type="text" required />
          <label>Your Email</label>
          <input type="text" required />
          <label>Message</label>
          <textarea required></textarea>
          <button>send</button>
        </form>
      </div>

      <div className="media">
        <Link to="/">
          <FaFacebookSquare />
        </Link>

        <Link to="/">
          <FaInstagram />
        </Link>

        <Link to="/">
          <FaTwitter />
        </Link>

        <Link to="/">
          <FaYoutube />
        </Link>

        <Link to="/">
          <FaLinkedin />
        </Link>

        <Link to="/">
          <FaGithub />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
