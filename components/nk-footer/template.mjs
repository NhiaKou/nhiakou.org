const template = document.createElement("template");
const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";

template.innerHTML = `
    <link rel="stylesheet" href="${origin}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/nk-footer/shadow.css">
    <nav>
        <main>
            <section>
                <div>
                    <h5>Sponsors</h5>
                    <ul class="donors">
                        <li><a href="https://github.com/heartbank"><img src="https://github.com/heartbank.png?size=100"></a></li>
                        <li><a href="https://github.com/siliconwat"><img src="https://github.com/siliconwat.png?size=100"></a></li>
                        <li><a href="https://github.com/thonlymetaverse"><img src="https://github.com/thonlymetaverse.png?size=100"></a></li>
                        <li><a href="https://github.com/nhiakou"><img src="https://github.com/nhiakou.png?size=100"></a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://kiitos.earth">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund">HeartBank</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                        <li><a href="https://youtube.com/@nhiakou">YouTube</a></li>
                        <li><a href="https://twitter.com/nhia3ou">Twitter</a></li>
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