import "./nk-sponsors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/nk-footer/shadow.css">
    <nav>
        <main>
            <section>
                <nk-sponsors></nk-sponsors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#NhiaKou">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#NhiaKou">HeartBank</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Follow</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#NhiaKou">THonly</a></li>
                        <li><a href="https://twitter.com/nhia3ou">Twitter</a></li>
                        <li><a href="https://youtube.com/@NhiaKou">YouTube</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:market@nhiakou.com">market@nhiakou.com</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://nhiakou.org">Nhia Kou Orchard</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;