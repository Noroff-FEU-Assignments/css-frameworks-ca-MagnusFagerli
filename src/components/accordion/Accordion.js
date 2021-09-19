import Accordion from "react-bootstrap/Accordion";
import React from 'react'

function ContentAccordion() {
    return (
        <div className="accordion">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
        <Accordion.Header className="accheader">First</Accordion.Header>
        <Accordion.Body>
        <div className="accordbody">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
          <img className="d-block tabimg w-100" alt="Oldschool tv." src="/Tab images/tab-1.jpg"/>
        </div>
          <div className="socials">
          <p className="share">SHARE</p>
          <i class="fab fa-facebook-f fa-2x facebook"></i>
          <i class="fab fa-twitter fa-2x twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
        <div className="accordbody">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
          <img className="d-block tabimg w-100" alt="Old photos on a wall." src="/Tab images/tab-2.jpg"/>
        </div>
          <div className="socials">
          <p className="share">SHARE</p>
          <i class="fab fa-facebook-f fa-2x facebook"></i>
          <i class="fab fa-twitter fa-2x twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
      <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
        <div className="accordbody">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
          <img className="d-block tabimg w-100" alt="Broken window." src="/Tab images/tab-3.jpg"/>
        </div>
          <div className="socials">
          <p className="share">SHARE</p>
          <i class="fab fa-facebook-f fa-2x facebook"></i>
          <i class="fab fa-twitter fa-2x twitter"></i>
          </div>
        </Accordion.Body>
      </Accordion.Item>

        </Accordion>


        </div>
    )
}

export default ContentAccordion