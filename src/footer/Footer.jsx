 import './footer.scss'
 import footerlogo from '../assets/logo1.png'
 const Footer = () => {
  return (
    <>
    <section className="news">
    <div className="newstext">
        <h4>Sign Up for Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
    </div>
        <div className="form">
        <input type="text" placeholder="Your email address"/>
        <button className="normal">Sign Up</button>
    </div>
</section>

<footer className="section-p">
    <div className="col">
        <img src={footerlogo} height="80px" />
        <h2>Contact</h2>
        <p><strong>Address : </strong>Mahendranagar, Nepal</p>
        <p><strong>Phone : </strong>+9779849604865</p>
        <p><strong>Hours : </strong>24/7</p>
    </div>
    <div className="col">
        <h2>About</h2>
        <p>About Us</p>
        <p>Delivery Information</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
    </div>
    <div className="col">
        <h2>My Account</h2>
        <p>Sign in</p>
        <p>View Cart</p>
        <p>My Whishlist</p>
        <p>Track My Orders</p>
        <p>Help</p>
    </div>
    <div className="col">
        <h2>Install App</h2>
        <p>From App Store or Google Play</p>
    </div>
</footer>
</>
  )
}
export default Footer
