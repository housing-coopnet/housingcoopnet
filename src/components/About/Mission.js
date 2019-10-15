import React, { Component } from 'react';
import '../../stylesheets/App.css';
import '../../stylesheets/About.css'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavHeader from "../NavHeader.js"
import NewsletterModal from "../Authentication/NewsletterModal"
const Link = require("react-router-dom").Link;

class Mission extends Component {
     constructor(props) {
          super(props)
          this.state = {
               modalShow: false
          }
     }
     modalClose = () => this.setState({ modalShow: false })

     render() {
          return (

               <Container fluid>
                                   <NavHeader />
                    <Row style={{paddingTop:"100px"}}>
                         <Col md={{ span: 6, offset: 3 }}>
                              <h1>The Problem</h1>
                              <p>Our urban communities have become inaccessible and exclusionary. The high cost of property has made home-ownership an unattainable dream for most residents. 
                                   <a href="https://www.urban.org/urban-wire/state-millennial-homeownership">Only 37% of Millennials own their own home in the United States, down from 45% for Baby Boomers when they were the same age</a>
                                   . In Alameda County,
                                   <a href="https://www.car.org/aboutus/mediacenter/newsreleases/2018releases/1qtr2018hai"> the median home value was $875,000 in 2018</a>
                                    , requiring a minimum annual income of $181,130 to qualify for a mortgage. As a result, more people are forced to rent housing from profit seeking landlords, driving up rental costs. </p><br />
                              <p>The average rent for a one bedroom apartment in the City of Berkeley  
                                   <a href="https://www.rentjungle.com/average-rent-in-oakland-rent-trends/">increased from $1,371 to $2,408 per month between 2011 and 2019 (9.5% annually)</a>
                                   . Over the same period, in Oakland the same style of unit increased from 
                                   <a href="https://www.apartmentlist.com/rentonomics/rent-growth-since-1960/">$1,264 to $2,567 (12.9% annually)</a>
                                   . Rising costs of living are not limited to the Bay Area. 
                                   Across the United States inflation-adjusted rent increased by 12% between 2000 and 2010, while household incomes fell by 7%, causing half of all renters in the country to spend more than 30% of income on rent.
                              </p>
                              <h4>So how do we go about solving this?</h4>
                              <Link to="/vision">
                              <a className="cta">Learn More about our platform</a>
                              </Link>
                         </Col>
                    </Row>
                    <Container fluid className="stickyBottom">
                         <Button   className="stickyBottom-button" onClick={() => this.setState({ modalShow: true })} fluid> SIGN UP FOR OUR NEWSLETTER</Button>
                         <NewsletterModal modalShow={this.state.modalShow} onClickAway={this.modalClose} />
                    </Container>
               </Container>
          );
     }
}
export default Mission;
