import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/nk-header/shadow.css">
    <header>
        <section>
            <a href="#"><figure>🏪</figure></a>
            <h1>Nhia Kou Market</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Online Store</h3>
                <nav>
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
                </nav>
            </li>
            <li>
                <h3>Offline Stores</h3>
                <nav>
                    <a><button>Find</button></a>
                    <!--<h4>Shoppers / Buyers</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#backend-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Pro Data Entry</h4>
                    <menu>
                        <li><a>Data on what to grow</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Jobs</h4>
                    ticket booth / atm / bank tellers: need to purchase coins first; cannot exchange back
                    hence: people can donate coins to buy food only like ebt
                    <menu>
                        <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                        <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                        <li><a>Remote Pair Programming on Discord</a></li>
                        <li><a>Students' Solo Projects on GitHub</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Cooking App</h3>
                <nav>
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
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
        </aside>
    </header>
`;

export default template;