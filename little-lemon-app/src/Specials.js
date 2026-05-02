function Specials() {
    return (
        <section className="specials">
            <div className="specials-head">
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                <article>
                    <img src="/greek-salad.jpg" alt="Greek Salad" />
                    <h3>Greek Salad <span>$12.99</span></h3>
                    <p>The famous greek salad of crispy lettuce, peppers, and olives.</p>
                </article>
                {/* Repeat for other dishes */}
            </div>
        </section>
    );
}
export default Specials;