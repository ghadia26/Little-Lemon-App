function Main() {
    return (
        <main className="specials">
            <div className="specials-head">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                <article>
                    <img src="/greek-salad.jpg" alt="Greek Salad" />
                    <h3>Greek Salad <span>$12.99</span></h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                    <a href="/order">Order a delivery</a>
                </article>
                <article>
                    <img src="/bruchetta.svg" alt="Bruschetta" />
                    <h3>Bruschetta <span>$5.99</span></h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <a href="/order">Order a delivery</a>
                </article>
                <article>
                    <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
                    <h3>Lemon Dessert <span>$5.00</span></h3>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a href="/order">Order a delivery</a>
                </article>
            </div>
        </main>
    );
}

export default Main;