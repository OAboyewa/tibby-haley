import "/src/styles/Footer.css";

export default function Footer() {
    return(
        <footer className="footer" id="footer">
            <div className="ft-cnt-bg"></div>
            <div className="ft-contact ft-cnt-sm" id="contact">
                <form action="">
                    <div className="ft-contact-title">
                        <span className="ft-primary h2 color-primary">Drop Me a Line</span>
                    </div>
                    <div className="content-cnt-3">
                        <div className="content-cnt-1">
                            <label className="ft-secondary p2 color-primary" htmlFor="">First Name *</label>
                            <input className="textfield" minLength={1} type="text" required />
                        </div>
                        <div className="content-cnt-1">
                            <label className="ft-secondary p2 color-primary" htmlFor="">Last Name *</label>
                            <input className="textfield" minLength={1} type="text" required />
                        </div>
                    </div>
                    <div className="content-cnt-1">
                        <label className="ft-secondary p2 color-primary" htmlFor="">Email *</label>
                        <input className="textfield" type="email" required />
                    </div>
                    <div className="content-cnt-3">
                        <div className="content-cnt-1">
                            <label className="ft-secondary p2 color-primary" htmlFor="">Your message</label>
                            <textarea className="textarea" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary p2" type="submit">Send</button>
                        </div>
                    </div>
                </form>
                <p>
                    <span className="ft-primary h3 color-primary">info@mysite.com</span>
                    <span className="ft-primary h3 color-primary">123-456-7890</span>
                </p>
            </div>
            <div className="ft-socials ft-cnt-sm">
                <p>
                    <a className="ft-primary h3 color-primary" href="">Instagram</a>
                    <a className="ft-primary h3 color-primary" href="">TikTok</a>
                    <a className="ft-primary h3 color-primary" href="">Twitter</a>
                    <span className="ft-secondary p2 color-primary" >©2035 by Tibby Haley. <br /> Powered and secured by Wix.com</span>
                </p>
            </div>
        </footer>
    );
}