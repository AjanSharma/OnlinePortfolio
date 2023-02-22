import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
// import '../JavaScriptFiles/Exper'
import '../services/Services'
import '../header/Header'
import '../about/About'
import '../portfolio/Portfolio'
import '../testimonials/Testimonials'
import '../contact/Contact'
import '../footer/Footer'
import { useRef } from 'react';



const Experience = () => {
  const a = useRef();

  const seeMoreSkills = () => {
    const popup = document.querySelector(".experience__container1");
    const blur = document.querySelector('.blurbg');
    const blur_service = document.querySelector('#services');
    const blur_header = document.querySelector('#header');
    const blur_about = document.querySelector('#about');
    const blur_portfolio = document.querySelector('#portfolio');
    // const blur_testimonials = document.querySelector('#testimonials');
    const blur_contact = document.querySelector('#contact');
    const blur_footer = document.querySelector('#footer');
    blur.style.filter='blur(70px)'
    blur_service.style.filter='blur(70px)'
    blur_header.style.filter='blur(70px)'
    blur_about.style.filter='blur(70px)'
    blur_portfolio.style.filter='blur(70px)'
    // blur_testimonials.style.filter='blur(70px)'
    blur_contact.style.filter='blur(70px)'
    blur_footer.style.filter='blur(70px)'
    popup.style.display = 'grid';

    document.body.classList.add("stop-scrolling");

  };

  const closeMoreSkills = () => {
    const popup = document.querySelector(".experience__container1");
    const blur = document.querySelector('.blurbg');
    const blur_service = document.querySelector('#services');
    const blur_header = document.querySelector('#header');
    const blur_about = document.querySelector('#about');
    const blur_portfolio = document.querySelector('#portfolio');
    // const blur_testimonials = document.querySelector('#testimonials');
    const blur_contact = document.querySelector('#contact');
    const blur_footer = document.querySelector('#footer');
    popup.style.display = 'none';
    blur.style.filter='blur(0px)'
    blur_service.style.filter='blur(0px)'
    blur_header.style.filter='blur(0px)'
    blur_about.style.filter='blur(0px)'
    blur_portfolio.style.filter='blur(0px)'
    // blur_testimonials.style.filter='blur(0px)'
    blur_contact.style.filter='blur(0px)'
    blur_footer.style.filter='blur(0px)'

    document.body.classList.remove("stop-scrolling");
  };

  const seeIndustrySkills = () => {
    const popup = document.querySelector(".experience__container2");
    const blur = document.querySelector('.blurbg');
    const blur_service = document.querySelector('#services');
    const blur_header = document.querySelector('#header');
    const blur_about = document.querySelector('#about');
    const blur_portfolio = document.querySelector('#portfolio');
    // const blur_testimonials = document.querySelector('#testimonials');
    const blur_contact = document.querySelector('#contact');
    const blur_footer = document.querySelector('#footer');
    blur.style.filter='blur(70px)'
    blur_service.style.filter='blur(70px)'
    blur_header.style.filter='blur(70px)'
    blur_about.style.filter='blur(70px)'
    blur_portfolio.style.filter='blur(70px)'
    // blur_testimonials.style.filter='blur(70px)'
    blur_contact.style.filter='blur(70px)'
    blur_footer.style.filter='blur(70px)'
    popup.style.display = 'grid';

    document.body.classList.add("stop-scrolling");

  };

  const closeIndustrySkills = () => {
    const popup = document.querySelector(".experience__container2");
    const blur = document.querySelector('.blurbg');
    const blur_service = document.querySelector('#services');
    const blur_header = document.querySelector('#header');
    const blur_about = document.querySelector('#about');
    const blur_portfolio = document.querySelector('#portfolio');
    // const blur_testimonials = document.querySelector('#testimonials');
    const blur_contact = document.querySelector('#contact');
    const blur_footer = document.querySelector('#footer');
    popup.style.display = 'none';
    blur.style.filter='blur(0px)'
    blur_service.style.filter='blur(0px)'
    blur_header.style.filter='blur(0px)'
    blur_about.style.filter='blur(0px)'
    blur_portfolio.style.filter='blur(0px)'
    // blur_testimonials.style.filter='blur(0px)'
    blur_contact.style.filter='blur(0px)'
    blur_footer.style.filter='blur(0px)'

    document.body.classList.remove("stop-scrolling");
  };

  return (
    <section id='experience'>
      

      
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className='blurbg'>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Language</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microservices</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>.NET Core</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Cloud System</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Azure DevOps</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CI/CD pipelines</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Azure Containers</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Azure Virtual Machine</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>App Service</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

      </div>
      <div className='container experience__buttons'>
        <a className='btn' ref={a} onClick={seeMoreSkills}>See More</a>
        <a className='btn' ref={a} onClick={seeIndustrySkills}>Industry Knowledge</a>
      </div>

      </div>

      <div className='container experience__container experience__container1'>
        <div className="experience__frontend">
          <h3>More Technical Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MSSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DB2</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Splunk</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Splunk</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AutoSys</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <a className='btn btn-primary close_btn' ref={a} onClick={closeMoreSkills}>Close</a>
        </div>
      </div>

      <div className='container experience__container experience__container2'>
        <div className="experience__frontend">
          <h3>Industry Knowledge</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Change Managment</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Incident Management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GitLab</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unit Testing</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JIRA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Agile Methodologies</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <a className='btn btn-primary close_btn' ref={a} onClick={closeIndustrySkills}>Close</a>
        </div>
      </div>

    </section>
  )
}

export default Experience