function Header() {
    return (
        <header className="hero-section">
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button aria-label="On Click">Reserve a Table</button>
            </section>
            <section>
                <img src="/restauranfood.jpg" alt="Chef holding a tray of food" />
            </section>
        </header>
    );
}

export default Header;