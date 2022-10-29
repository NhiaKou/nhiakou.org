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
                        <a href="#backend-cohort"><button>Shop</button></a>
                        <h4>Coins</h4>
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
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Veggies</h3>
                    <div>
                        <a href="#coupon"><button>Kiitos.Earth</button></a>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Fruits</h3>
                    <div>
                        <a href="#ios-cohort"><button>HeartBank.Net</button></a>
                        <h4>Explorer</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Supra Blockchain</h4>
                        <menu>
                            <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                            <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                            <li><a>Remote Pair Programming on Discord</a></li>
                            <li><a>Students' Solo Projects on GitHub</a></li>
                        </menu>
                        <h4>Infra Blockchains</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li><a>Students' Writings on Medium</a></li>
                            <li><a>Mock Interviews on YouTube</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Herbs</h3>
                    <div>
                        <a href="#coupon"><button>HeartBank.Domains</button></a>
                        <h4>Culinary</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Medicinal</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Drinks</h3>
                    <div>
                        <a href="#coupon"><button>HeartBank.Domains</button></a>
                        <h4>Browser</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>DNS</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Cooking App</h3>
                    <div>
                        <a href="#coupon"><button>Download</button></a>
                        <h4>Inventory</h4>
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
                        </menu>
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