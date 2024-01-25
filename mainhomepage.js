import React from 'react';
import './styles/mainhomepage.css';

const Mainhomepage = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />

      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>

      <div className="container1">
        <div className="content1">
          <h1>RiseAbove</h1>
          <p>RiseAbove is a non-profit movement empowering the awareness for mental health among the people.
            It is created to inform the person about his/her mental condition and automatically get a consultancy
            from a doctor. This is not a site for personal disclosure of suicidal thoughts or behaviours.
            If you are in crisis, please call 112/911 or go to your nearest emergency department for assistance.
          </p>
          <button className="btn1" type="button"><a href='kids.html'><strong>KIDS</strong> (0-18)years</a></button>
          <button className="btn1" type="button"><a href="/"><strong>ADULTS</strong>(19-40)years</a></button>
          <button className="btn1" type="button"><a href="/"><strong>MIDDLE AGED</strong>(41-65)years</a></button>
          <button className="btn1" type="button"><a href="/"><strong>SENIOR CITIZENS</strong>(65+)years</a></button>
        </div>

        <div className="gif">
          <img src="https://media.giphy.com/avatars/lizzyrodriguez/6mOSigfgYT2p.gif" alt="gif" style={{ height: '550px', width: '550px' }} />
        </div>
      </div>
      </div>
  );
};

export default Mainhomepage;
