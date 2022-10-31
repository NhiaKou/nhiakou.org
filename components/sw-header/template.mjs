const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🍇</figure></a>
            <a href="/"><h1>Nhia Kou</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Online Store</h3>
                    <div>
                        <a><button>Shop</button></a>
                        <!--<h4>Coins</h4>
                        <menu>
                            <li><a>Visit</a></li>
                            <li><a>Pickup</a></li>
                            <li><a href="#backend-quiz">Delivery</a></li>
                        </menu>
                        <h4>Prime Membership</h4>
                        <menu>
                            <li><a>Visit</a></li>
                            <li><a>Pickup</a></li>
                            <li><a href="#backend-quiz">Delivery</a></li>
                        </menu>
                        <h4>todo: add to store app</h4>
                        <menu>
                            <li><a>Veggies</a></li>
                            <li><a>Fruits</a></li>
                            <li><a href="#backend-quiz">Herbs</a></li>
                            <li><a>Drinks</a></li>
                        </menu>-->
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Cooking App</h3>
                    <div>
                        <a><button>Download</button></a>
                        <!--<h4>Inventory</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Recipes</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>-->
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;