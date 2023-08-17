import "/src/styles/Bio.css";
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';

export default function Bio() {
    const BioPage = (
        <div className="bio">
            <div className="bio-bg"></div>
            <div className="bio-card">
                <p>
                    <span className="h2 ft-primary color-primary">About Tibby Haley</span>
                    <span className="bio-card-circle"></span>
                    <span className="h4 ft-primary color-primary">
                        I'm a paragraph. Click here to add your own text and edit me. 
                        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                        Feel free to drag and drop me anywhere you like on your page. 
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </span>
                    <span className="h4 ft-primary color-primary">
                        This is a great space to write a long text about your company and your services. 
                        You can use this space to go into a little more detail about your company. 
                        Talk about your team and what services you provide. 
                        Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. 
                        Make your company stand out and show your visitors who you are.
                    </span>
                </p>
            </div>
        </div>
    );

    return(
        <>
            <Header />
            {BioPage}
            <Footer />
        </>
    );
}