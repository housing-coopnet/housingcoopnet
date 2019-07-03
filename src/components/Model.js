import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/About.css'
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import NavHeader from "../components/NavHeader.js"
import NewsletterModal from "./NewsletterModal"

class Model extends Component {
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
                    <Row style={{ paddingTop: "100px" }}>
                         <Col md={{ span: 6, offset: 3 }}>
                              <h1>Our Model</h1>
                              <h4>What is cooperative housing?</h4>
                              <p>Housing co-ops are legal entities organized to own and manage a property (or properties) on behalf of their members. Members are typically also residents but this isn’t necessarily required. The co-op, as an organization, owns the property while the members own shares in the co-op, and therefore vote as a group on how the property is run. </p>
                              <p>This can provide many benefits in the flexibility of ownership, as members aren’t tied to the property like they would be if they took a mortgage themselves, while also maintaining affordability, since there is no landlord extracting profits from ever-increasing rents.
</p>
                              <h4>What is a limited equity cooperative?</h4>
                              <p>Limited Equity Housing Cooperatives, or LEHC's, are affordable housing owned jointly by the residents. Each individual or family purchases a share in the nonprofit corporation that owns the property, and has the right to occupy an individual unit. Each household builds a small amount of equity on their share, usually tied to inflation, but by law, no more than 10% per year. Because the increase in equity is limited, the buy-in cost and monthly payments remain well below market rates.  This makes home ownership available for lower-income individuals and families who otherwise could never afford to buy homes.</p>
                              <h4>Why would people live in cooperatives?
</h4>
                              <p>Aside from the social value of living and working beside people who share a communal (rather than solitary) vision of what home can mean, we believe there are six benefits of cooperative housing:
                              </p>
                              <em className="title">Security of Tenancy:</em><p>As long as a member pays monthly assessment and does not violate basic co-op agreements, (s)he can live there permanently without fear of eviction.
</p>
                              <em className="title">Control Over Living Space: </em><p>There is much greater flexibility in making alterations in interior and exterior space, than with a rented home.
</p>
                              <em className="title">Stability of Rents: </em><p>With careful budgeting, a co-op can keep rents very stable.  When rents are raised, it is for a specific reason (such as to pay for increased costs) not for landlord profit.
</p>
                              <em className="title">Make Your Own Rules</em><p>Each co-op operates slightly differently, based on the physical layout, people living there, etc.  No landlord can tell you what to do.
</p>
                              <em className="title">Tax Benefits: </em><p>A member can deduct a percentage of the mortgage interest and property taxes from income taxes, if (s)he itemizes deductions.
</p>
                              <em className="title">Equity Build-up: </em> <p>Members receive interest annually on the initial share investment. 
                              </p>
                              <h4>What if I don’t want to be surrounded by people all the time?
                              </h4>
                              <p>Cooperative doesn’t mean constant contact. Depending on how you structure your co-op and which property you live in, members can each have their own rooms, bathrooms, or other designated spaces. Co-ops come in all shapes and sizes, from individual units with shared gardens to single houses with a communal kitchen. What makes a home a co-op is how it’s owned and operated rather than the physical space. Many cooperatives have a particular vision for the type of community they want but we here at CoopNet believe everyone should be free to organize their own style of co-housing.
                              </p>
                              <h4>How does CoopNet come in?
                              </h4>
                              <p>CoopNet aims to support the creation and growth of cooperatives in all of our partner communities. We plan to provide information on cooperative housing, legal templates and resources, and a complete listing of co-ops and supportive organizations. In addition, we are developing an active community board of co-op listings and vacancies, as well as a chat-forum for current and potential coopers to discuss their journey as members and organizations. Finally, we are developing a crowdfunding platform to help new cooperatives raise the initial capital required to leverage financing for their new home. We hope to unite all supporters of the cooperative movement in one place and create opportunities for anyone, regardless of their background, to join us in creating a more equitable, democratic future! 
                              </p>
                              <h4>
                                   How do I join / form a cooperative?
                              </h4>
                              <p>Sign up for our newsletter to get updates on new cooperatives and vacancies listed on our site! Once a coop has openings, we’ll post the details of their listing and contact information for their board. Hopefully we can help you join a co-op community soon!
                              </p>
                              <p>Forming a new cooperative can be a long and complex process. That said, we fully believe that it is something that anyone can and should do! First, check out <a href="https://www.shareable.net/how-to-start-a-housing-co-op/">this article</a> on how to start a housing co-op from our friends at Shareable and see if it’s right for you. Then, if you’re still interested, please reach out to us by email or social media using the links below and we can discuss how to move forward!
                              </p>
                              <h4>Why would people back a cooperative they aren’t living in?

                              </h4>
                              <em className ="title">How do I back a cooperative?
                              </em>
                              <p>Sadly our crowdfunding portal isn’t yet open--it takes a surprising amount of web development and legal filings to start one--but if you’re interested in backing a local cooperative in the Bay Area check out our friends at the <a href="https://ebprec.org/">East Bay Permanent Real Estate Cooperative!</a> They’re doing some amazing things to preserve communities in Oakland and could definitely use your support!
                              </p>
                              <p>Our plan is to create a platform for new cooperatives to promote their Direct Public Offerings to backers on our site by January 2020. Sign up for our newsletter and follow us on social media to be the first to hear about our progress!
                              </p>
                              <h4>Are there any limits for backers? What about regulations?
</h4>
               <p>Yes, there are certainly legal regulations surrounding the investment in cooperatives, just like any organization. Most investments (whether debt or equity) have to be registered with the Securities and Exchange Commission, including the form that we think works best for housing co-ops, <a href="https://www.cuttingedgecapital.com/direct-public-offering/">Direct Public Offerings </a>. The SEC has a <a href="https://www.sec.gov/smallbusiness/exemptofferings/regcrowdfunding">separate set of guidelines for regulation crowdfunding </a>which is actively being updated.
                              </p>
                              <p>Interested in learning more about Direct Public Offerings and how they can support cooperatives? Check out this <a href="https://medium.com/fifty-by-fifty/real-pickles-dpo-how-workers-raised-half-a-million-dollars-to-buy-a-business-c470049ee590">Medium article on how Real Pickles raised $500,000 from their community of supporters!</a> Or read about the <a href="https://www.cuttingedgecapital.com/dpos-and-crowdfunding-whats-the-difference/">differences between DPOs and crowdfunding</a> from our friends at Cutting Edge Capital!
                              </p>
                              <h4>How will my investment be treated for tax purposes?
                              </h4>
                              <p>That will likely depend on a lot of details: from where you live to where the cooperative is based, as well as what type of investment it is. Generally speaking, it will probably be treated like most other investments in securities, where the profits generated are taxed as either income or capital gains. We cannot provide official legal advice, however, so we highly advise anyone making an investment (in a co-op or otherwise) to speak to an accountant and an attorney.
                              </p>
                              <p>In case you were wondering, investments in cooperatives are not usually tax deductible. If you wanted to make a donation, on the other hand, we can certainly recommend plenty of nonprofit 501(c)(3) organizations such as the <a href="http://bayareaclt.org/">Bay Area Community Land Trust</a> who can help you support cooperatives and make tax-deductible charitable donations.
</p>
                         </Col>
                    </Row>
                    <Container fluid className="stickyBottom">
                         <Button className="stickyBottom-button" onClick={() => this.setState({ modalShow: true })} fluid> SIGN UP FOR OUR NEWSLETTER</Button>
                         <NewsletterModal modalShow={this.state.modalShow} onClickAway={this.modalClose} />
                    </Container>
               </Container>
          );
     }
}
export default Model;
