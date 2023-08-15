import "/src/styles/Footer.css";

export default function Footer() {
    return(
        <footer className="footer" id="footer">
            <div></div>
            <div>
            <form action="">
                <div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                </div>
                <div>
                <label htmlFor=""></label>
                <input type="text" />
                </div>
                <div>
                <div>
                    <label htmlFor=""></label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit"></button>
                </div>
                </div>
            </form>
            <p>
                <span>info@mysite.com</span>
                <span>123-456-7890</span>
            </p>
            </div>
            <div>
            <p>
                <a href="">Instagram</a>
                <a href="">TikTok</a>
                <a href="">Twitter</a>
                <span>©2035 by Tibby Haley. <br /> Powered and secured by Wix.com</span>
            </p>
            </div>
        </footer>
    );
}