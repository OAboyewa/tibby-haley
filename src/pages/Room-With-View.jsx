import "/src/styles/RoomWithView.css";
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';

export default function RoomWithView() {
    const page = (
        <div>
            <div className="rwv-stn-00">
                <p className="ft-primary color-primary">
                    <span className="h1">Room With a View</span>
                    <span className="p2 ft-secondary">Client: ERA  |   2035   |   Set Design, Photography</span>
                    <span className="rwv-circle-wrp"> 
                        <span className="rwv-stn-00-circle"></span>
                    </span>
                </p>
                <p className="h4 ft-primary color-primary">
                    I'm a paragraph. 
                    Click here to add your own text and edit me. 
                    It’s easy. 
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
            </div>
            <div className="rwv-stn-01">
                <div className="rwv-stn-01-c1">
                    <div className="rwv-stn-01-img-c1"></div>
                </div>
                <div className="rwv-stn-01-c2">
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/11062b_4d121d12d88e442daddd3eb433933b29~mv2.jpg/v1/crop/x_701,y_334,w_2423,h_3154/fill/w_508,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Morning%20Coffee.jpg" alt="" />
                    </div>
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/c837a6_545dd93c018448d38383acc0bdf6193d~mv2.jpg/v1/crop/x_0,y_381,w_3825,h_4975/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-cottonbro-6869656donut.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="rwv-stn-02">
                <img src="https://static.wixstatic.com/media/11062b_540eb79aa87a4e09b665e6daf5843bfa~mv2.jpg/v1/fill/w_1945,h_1586,al_b,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_540eb79aa87a4e09b665e6daf5843bfa~mv2.jpg" />
            </div>
            <div className="rwv-stn-03">
                <div className="rwv-column-left">
                    <div className="rwv-img-border">
                        <img src="https://static.wixstatic.com/media/11062b_cfc29a0db4024eca8dde2396d2398b30~mv2.jpg/v1/crop/x_984,y_1185,w_1264,h_1644/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Breakfast%20Tray%20%20.jpg" alt="" />
                    </div>
                </div>
                <div className="rwv-column-right">
                    <div className=""></div>
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