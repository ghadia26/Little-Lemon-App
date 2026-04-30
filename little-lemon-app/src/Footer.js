function Footer() {
    return (
        <footer>
            <section>
                <img src="/footer-logo.png" alt="Little Lemon Footer Logo" />
            </section>
            <section>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </section>
            <section>
                <h3>Contact</h3>
                <ul>
                    <li>Address: 123 Town Street, Chicago</li>
                    <li>Phone: +11 123 456 789</li>
                    <li>Email: contact@littlelemon.com</li>
                </ul>
            </section>
            <section>
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;