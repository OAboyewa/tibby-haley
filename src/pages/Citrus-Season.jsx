import "/src/styles/CitrusSeason.css";
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';

export default function CitrusSeason() {
    const page = (
        <div>
            <div className="cs-stn-00">
                <p className="ft-primary color-primary">
                    <span className="h1">Citrus Season</span>
                    <span className="p2 ft-secondary">Client: Red Magazine   |   2035   |   Creative, Photography</span>
                    <span className="cs-circle-wrp"> 
                        <span className="cs-stn-00-circle"></span>
                    </span>
                </p>
                <p className="h4 ft-primary color-primary">
                    I'm a paragraph. 
                    Click here to add your own text and edit me. 
                    It’s easy. 
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
            </div>
            <div className="cs-stn-01">
                <div className="cs-stn-01-c1">
                    <div className="stn-01-img-c1"></div>
                </div>
                <div className="cs-stn-01-c2">
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/45d10e_6230a6119a83406185cabc294816c949~mv2.jpg/v1/crop/x_0,y_512,w_4896,h_6368/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1128758346.jpg" alt="" />
                    </div>
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/45d10e_581042a81bd244f1abf4a825a20da548~mv2.jpg/v1/crop/x_0,y_256,w_2448,h_3184/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1023347352.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="cs-stn-02">
                <div className="img-border">
                    <img src="https://static.wixstatic.com/media/45d10e_5f001b282712449b808f44d927af9fc6~mv2.jpg/v1/crop/x_0,y_512,w_4896,h_6368/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1128771604.jpg" alt="" />
                </div>
            </div>
        </div>
    );

    return(
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}