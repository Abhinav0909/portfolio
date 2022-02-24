/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      margin:25px;
      width:380px;
     
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Abhinav Karforma</span>
              </p>
              <h2 className="about__heading">A Web developer enthuisastic</h2>
              <div className="about__info">
                <PText>
                  I am from godda, Jharkhand. A place of beauty and nature.
                  Since my childhood, i love art and design. I always try to
                  design stuff with my unique point of view. I also love create
                  things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in my first year of college.
                  Coding is also an art for me. I love to work with different
                  ideas and technologies. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a href="/abhinav_resume.pdf" download='Resume'>
                <button style ={{width:'200px',height:'50px',backgroundColor:'white',borderRadius:'10px',color:'black',fontSize:'18px',fontFamily:'sans-serif',cursor:'pointer'}}>Download Resume</button>
              </a>
              {/* <Button btnText='Download CV' >{(e)=>{e.preventDefault() window.print()}}</Button> */}
             
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Saint Thomas School ,Godda']}
              />
              <AboutInfoItem
                title="High School"
                items={['Ramkrishnan mission Vidyapith Deoghar']}
              />
              <AboutInfoItem title="College" items={['S.R.M University']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Next']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Next']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="05/2021-Present"
                items={['Technical Team Member in alexa developers s.r.m']}
              />
              <AboutInfoItem
                title="10/2021-Present"
                items={['Front end developer in collabbi ']}
              />
              <AboutInfoItem
                title="16/10/2021-16/11/2021"
                items={['Web developer in cyberexplore']}
              />
              <AboutInfoItem
                title="05/2021-Present"
                items={['Software Developer in techanalogy']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
