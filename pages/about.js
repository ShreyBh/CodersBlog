import React from 'react'

const About = () => {
  return (<>
<style jsx>
  {`
    .img1
    {
     width:100%;
    }
    .h2{
      text-align:center;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
    }
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    .column {
      float: left;
      width: 50%;
      margin-bottom: 16px;
      padding: 0 8px;
    }
    
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
    }
    
    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #474e5d;
      color: white;
    }
    
    .container {
      padding: 0 16px;
    }
    
    .container::after, .row::after {
      content: "";
      clear: both;
      display: table;
    }
    
    .title {
      color: grey;
    }
    
    .button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }
    
    .button:hover {
      background-color: #555;
    }
    
    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
  `}
</style>
  
    <div className="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>

<h2 className='h2'>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img className='img1' src="/w3images/team1.jpg" alt="Jane" />
      <div className="container">
        <h2>Shrey Bhandari</h2>
        <p className="title">Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>bshrey017@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
      <img className='img1' src="/w3images/team3.jpg" alt="John" />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default About