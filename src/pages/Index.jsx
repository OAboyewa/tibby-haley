import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const el = document.querySelector("html");
    const px1 = document.getElementById("px-img1");
    const px2 = document.getElementById("px-img2");
    const subHeroBG = document.getElementById("sub-hero-bg");

    document.addEventListener("scroll", (event) => {
      let mxHgt = el.scrollHeight - el.clientHeight;console.log(el.scrollTop);

      if (Math.round(el.scrollTop) >= 1343) {
        let spd1 = Normalize(Math.round(el.scrollTop), 1343, mxHgt);
        px1.style.backgroundSize = `calc(50% + ${spd1 * 30}%)`;
      }

      if (Math.round(el.scrollTop) >= 4983) {
        let spd2 = Normalize(Math.round(el.scrollTop), 4983, mxHgt);
        px2.style.backgroundSize = `calc(100% + ${spd2 * 75}%)`;
      }

      if (Math.round(el.scrollTop) >= 100) {
        let spd = Normalize(Math.round(el.scrollTop), 100, 500);
        subHeroBG.style.opacity = `${spd}`;
      }
      
    });

    function Normalize (x, min, max) {
      return (x - min) / (max - min);
    }
  });

  return (
      <div id="home">
          <div className="hero">
            <div>
              <p className="hero-text ft-primary color-primary">
                Tibby Haley <br /> <span >Creative</span> Director <br /> & Photographer
              </p>
            </div>
            <div className="flower-1-wrapper">
              <div className="flower-1-cnt">
                  <div className="flower-1-mask_on">
                      <img src="https://static.wixstatic.com/media/c837a6_3bcc1170f01a445087c59e08ed17d815~mv2.jpg" alt="" />
                  </div>
                  <div className="flower-1-mask_off">
                      <img src="https://static.wixstatic.com/media/c837a6_3bcc1170f01a445087c59e08ed17d815~mv2.jpg" alt="" />
                  </div>
              </div>
            </div>
            <div className="flower-2-wrapper">
              <div className="flower-2-cnt">
                  <div className="flower-2-mask_on">
                      <img src="https://static.wixstatic.com/media/11062b_540eb79aa87a4e09b665e6daf5843bfa~mv2.jpg" alt="" />
                  </div>
                  <div className="flower-2-mask_off">
                      <img src="https://static.wixstatic.com/media/11062b_540eb79aa87a4e09b665e6daf5843bfa~mv2.jpg" alt="" />
                  </div>
              </div>
            </div>
          </div>
          <div className="sub-hero">
              <div className="sub-hero-bg" id="sub-hero-bg"></div>
              <div className="info-card">
                  <span className="h2 ft-primary color-primary card-items">Welcome To My Playground</span>
                  <span className="card-items">
                    <span className="circle"></span>
                  </span>
                  <span className="h4 ft-primary color-primary card-items">I’m a creative director based in San Francisco. I work with clients across the globe, crafting unique visual concepts with a lasting impact.</span>
                  <button className="btn btn-primary p1 ft-secondary card-items">More</button>
              </div>
          </div>
          <div className="my-project">
            <div className="project-title">
              <p className="h2 ft-primary color-primary tx-align-cnt">
                  My Projects
              </p>
            </div>
            <div className="project-content">
              <div className="project-parallax">
                <div className="p1-px-img" id="px-img1"></div>
                <a href="#">
                  <img src="https://static.wixstatic.com/media/45d10e_b57ebbe4d019494bb9b451f5d024ec87~mv2.jpg/v1/crop/x_96,y_1461,w_5322,h_6922/fill/w_419,h_545,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1128785337.jpg" alt="" />
                </a>
              </div>
              <div className="project-card">
                <span className="h1 ft-primary color-secondary">Citrus <br /> Season</span>
                <span className="h3 ft-primary color-secondary">I'm a paragraph. Click here to add your own text and edit me.</span>
                <span className="ft-secondary color-secondary"><a href="" >See Project</a></span>
              </div>
            </div>
          </div>
          <div className="project-2">
            <div className="overlay">
              <span className="h1 ft-primary tx-align-cnt color-white">Room With <br /> a View</span>
              <span className="h3 ft-primary tx-align-cnt color-white">I'm a paragraph. Click here to add your own text and edit me.</span>
              <span className="ft-secondary color-white"><a href="">See Project</a></span>
            </div>
          </div>
          <div className="project-3">
            <div className="column p3-left">
              <div className="p3-left-bg">
                <img src="https://static.wixstatic.com/media/c837a6_9e312d1efe3d4ac38e0be9ffef623deb~mv2.jpg/v1/crop/x_423,y_121,w_899,h_1237/fill/w_488,h_671,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-arthouse-studio-5016527.jpg" alt="" />
              </div>
              <div className="p3-left-cnt">
                <span className="h1 ft-primary tx-align-cnt color-primary">True Romance</span>
                <span className="h3 ft-primary tx-align-cnt color-primary">I'm a paragraph. Click here to add your own text and edit me.</span>
                <span className="ft-secondary tx-align-cnt color-primary"><a href="#">See Project</a></span>
              </div>
            </div>
            <div className="column p3-right">
              <img src="https://static.wixstatic.com/media/45d10e_88ed9eeed26244fcb4bb74e74c3c8997~mv2.jpg/v1/fill/w_953,h_1096,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_88ed9eeed26244fcb4bb74e74c3c8997~mv2.jpg" alt="" />
            </div>
          </div>
          <div className="project-4">
            <div className="p4-px-img" id="px-img2"></div>
            <div className="project-4-cnt">
              <span className="circle"></span>
              <span className="h1 ft-primary tx-align-cnt color-primary">Power Suit</span>
              <span className="h3 ft-primary tx-align-cnt color-primary">I'm a paragraph. Click here to add your own text and edit me.</span>
              <span className="ft-secondary tx-align-cnt color-primary"><a href="#">See Project</a></span>
            </div>
          </div>
          <div className="creative-services">
            <p>
              <div className="ft-primary color-primary">Creative Services</div>
              <div className="ft-primary color-primary">Set Design, <br /> Art Direction & <br /> Brand Identity</div>
            </p>
            <div>
              <img src="https://static.wixstatic.com/media/c837a6_bb0572dc3f914d68a106767a49cc2d4a~mv2.jpg/v1/crop/x_912,y_0,w_3640,h_3640/fill/w_85,h_85,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dan-meyers-0AgtPoAARtE-unsplash.jpg" alt="" />
            </div>
          </div>
      </div>
    );
}