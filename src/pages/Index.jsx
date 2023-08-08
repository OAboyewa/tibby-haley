
export default function Index() {
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
                <div className="sub-hero-bg"></div>
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
            </div>
        </div>
      );
}