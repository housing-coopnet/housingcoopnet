import React, { Component } from 'react';
import '../../stylesheets/App.css';
import '../../stylesheets/About.css'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavHeader from "../NavHeader.js"
import NewsletterModal from "../Authentication/NewsletterModal"

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
                    <Row style={{ paddingTop: "100px" }}>
                         <Col md={{ span: 6, offset: 3 }}>
                              <h1>The Platform</h1>
                              <p>Cooperatives are a unique form of affordable housing because they alter the fundamental structure of property ownership. Residents control their property and all decisions associated with it, including the costs set for members to cover things like mortgage payments, taxes, and maintenance. There is no landlord seeking to maximize profits as an intermediary between the source of capital (often a bank or credit union) and the residents. While the underlying drivers of housing cost--land valuation on a private market, assessed property taxes, debt service on initial acquisition or development expenses, insurance, and repairs--are similar, the removal of the unnecessary intermediary makes a house more affordable as a cooperative than it would be in a traditional rental system.
</p>
                              <p>In addition to the cost-savings of direct ownership, cooperatives provide residents with several benefits: security, equity, transferability, and opportunities for subsidy.
                              </p>
                              <h4>Benefits of Cooperatives</h4>
                              <p>Joint-ownership means that residents are not at risk of eviction by a landlord. As long as the cooperative can cover the cost of the mortgage and taxes, every resident contributing their fair share is guaranteed long-term security in housing. Cooperatives have no reason to eject members simply because the local cost of rent is increasing, unlike landlords, and can elect to formalize this promise of security and long-term affordability by organizing as a limited-equity co-op.
                              </p>
                              <p>Another benefit of resident-ownership is that members accrue equity through the co-op in the property as their mortgage is paid off. Just like a traditional homeowner, cooperatives build up a greater ownership stake in the property as the principal is paid off their debt. Members each receive a portion of this equity through their ownership of shares in the co-op, thereby building savings which can be transferred to their children or sold later on. Limited-equity cooperatives, as the name suggests, restrict how much this ownership stake changes in value over time, to prevent the rapid appreciation in land values which drive up the cost of housing in high-demand real estate markets. Members’ shares are less ‘profitable’ as a result, but the co-op remains affordable for future residents.
                              </p>
                              <p>Residents are guaranteed a place to live in the cooperative through a long-term lease agreement, which is tied to their ownership share in the organization. Members can transfer their shares as well as their lease to another person or family, including their own friends or relatives, thereby enabling cooperatives to remain locally owned within a community. Cooperatives often limit the transferability of these rights based on prior association, income status, or other qualifiers in order to preserve the mission of the organization, but these restrictions are decided entirely by the democratic vote of the founding members.
                              </p>
                              <p>Finally, cooperatives can benefit from many public and nonprofit subsidies that further reduce long-term costs. Many cities and states have funding set aside specifically for cooperatives which serve low-income communities. Co-ops qualify for federal housing subsidies as well, including those restricted to promoting homeownership. Since many co-ops are committed to perpetual affordability, they are also a natural partner for land banks and community land trusts (CLTs), which act as  stewards of the underlying land and often receive support from city governments.
                              </p>
                              <h4>Solutions</h4>
                              <p>One model which can rapidly create deeply affordable housing that many cities are employing is the donation of public land to a CLT and subsequent conversion or construction of a housing cooperative. This system separates the land, which can fluctuate in value according to markets, from the house itself, which remains relatively stable; members of the cooperative then only have to make monthly payments on the value of the house, which is typically a fraction of the value of underlying land.
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
export default Mission;
