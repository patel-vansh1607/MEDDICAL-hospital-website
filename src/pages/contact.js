import HeaderComponent from "../components/headerComponent"
import "./contact.css"
import HeaderImage from "../Images/contact.png"

function ContactPage() {
    return (
        <div>
            <HeaderComponent/>
            <header>
                <img src={HeaderImage}></img>
                <h5>Home / Contact</h5>
                <h1>Our Contacts</h1>
            </header>
            {/* Footer Component */}
        </div>
    )
}

export default ContactPage