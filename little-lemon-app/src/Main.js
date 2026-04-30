function Main() {
    return (
        <main>
            <section className="specials">
                <div className="specials-head">
                    <h1>This week's specials!</h1>
                    <button>Online Menu</button>
                </div>
                
                <div className="cards">
                    {/* Card 1: Greek Salad */}
                    <article>
                        <img src="/greek-salad.jpg" alt="Greek Salad" />
                        <h3>Greek salad <span>$12.99</span></h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese...</p>
                        <a href="/order">Order a delivery</a>
                    </article>

                    {/* Card 2: Bruchetta */}
                    <article>
                        <img src="/bruchetta.svg" alt="Bruchetta" />
                        <h3>Bruchetta <span>$5.99</span></h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt.</p>
                        <a href="/order">Order a delivery</a>
                    </article>

                    {/* Card 3: Lemon Dessert */}
                    <article>
                        <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
                        <h3>Lemon Dessert <span>$5.00</span></h3>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic.</p>
                        <a href="/order">Order a delivery</a>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Main;