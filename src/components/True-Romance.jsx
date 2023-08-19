import { useEffect } from "react";
import "/src/styles/TrueRomance.css";
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';

export default function TrueRomance() {
    useEffect(() => {
        const el = document.querySelector("html");
        const px3 = document.getElementById("px-img3");
    
        document.addEventListener("scroll", (event) => {
          let mxHgt = el.scrollHeight - el.clientHeight; console.log(el.scrollTop);
    
          if (Math.round(el.scrollTop) >= 1343) {
            let spd1 = Normalize(Math.round(el.scrollTop), 1343, mxHgt);
            px3.style.backgroundSize = `calc(100% + ${spd1 * 30}%)`;
          }         
        });
    
        function Normalize (x, min, max) {
          return (x - min) / (max - min);
        }
      });

    const page = (
        <div>
            <div className="tr-stn-00">
                <p className="ft-primary color-primary">
                    <span className="h1">True Romance</span>
                    <span className="p2 ft-secondary">Client: The Agency   |   2035   |   Photography</span>
                    <span className="tr-circle-wrp"> 
                        <span className="tr-stn-00-circle"></span>
                    </span>
                </p>
                <p className="h4 ft-primary color-primary">
                    I'm a paragraph. 
                    Click here to add your own text and edit me. 
                    It’s easy. 
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
            </div>
            <div className="tr-stn-01">
                <div className="tr-stn-01-c1">
                    <div className="tr-stn-01-img-c1"></div>
                </div>
                <div className="tr-stn-01-c2">
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/c837a6_8ead1c8aae45434099c6223d6a2758ae~mv2.jpg/v1/crop/x_0,y_68,w_4160,h_5410/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thomas-millot-dAYGcP1fc9E-unsplash.jpg" alt="" />
                    </div>
                    <div className="stn-01-img-wrp">
                        <img src="https://static.wixstatic.com/media/c837a6_9e312d1efe3d4ac38e0be9ffef623deb~mv2.jpg/v1/crop/x_635,y_0,w_1730,h_2250/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-arthouse-studio-5016527.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="tr-stn-02">
                <div className="tr-4">
                    <div className="tr-px-img" id="px-img3"></div>
                    <div className="tr-4-cnt tr-img-border">
                        <img src="https://static.wixstatic.com/media/45d10e_ae138447395c498db2498b75b610579d~mv2.jpg/v1/crop/x_3813,y_0,w_1773,h_2306/fill/w_509,h_662,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1375278251.jpg" alt="" />
                    </div>
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
    );
}