import './style.css';

const Footer = () => {
    return (
        <footer>
        
        <div class="footer-box1">
            <p>Copyright © 2022 Leonardo Fronza</p>
        </div>

        <div class="footer-box2" id="contact">
            
            <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
            <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
            <button class="footer-btn"><ion-icon name="logo-whatsapp"></ion-icon>CONTACT</button>
        </div>

    </footer>
    )
}

export default Footer;