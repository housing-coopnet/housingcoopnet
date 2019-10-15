import React, { Component } from 'react';
import '../../stylesheets/App.css';
import '../../stylesheets/About.css'
import { Container, Col, Row, Button } from 'react-bootstrap';
import NavHeader from "../NavHeader.js"
import NewsletterModal from "../Authentication/NewsletterModal"

class History extends Component {
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
                              <h1>Our Story</h1>
                              <p>CoopNet began with an experience familiar to many in the Bay Area--our members moved to Berkeley and had to find somewhere to live. Trying to decide between spending over $1,200 a month for a single or $800 to share a room with another student, we were already fed up with the ridiculousness of the housing crisis. As students we were also keenly aware that we were feeding into a system of gentrification and displacement that was continuously driving up rents for the long-term residents who formed the heart of our new community. We faced a choice: either ignore the injustice all around us and join the Bay’s profit-driven treadmill or put our hearts and minds to use doing something to preserve everything we loved about our new home. Needless to say, our conscience triumphed.
                              </p>
                              <p>CoopNet was born from a simple question. Why do we only have two options for housing: renting or owning? Why do we have to pay over half or three-quarters of our income just to have a place to sleep? Isn’t there another alternative to the rent-own dichotomy?
                              </p>
                              <p>We found our answer in cooperative housing. Two of our members, Ramsay and Jinsu, were lucky enough to join the Berkeley Student Cooperative soon after moving to the Bay. The intentional community they found there inspired them with a new vision for living, and the affordability allowed them to focus on their education rather than worrying about how to pay the rent. The BSC seemed like a perfect solution to the housing crisis--so why didn’t more people didn’t start up housing cooperatives and take control of their own homes?
                              </p>
                              <p>After dozens of conversations with housing co-ops across the Bay, we learned that organizing a cooperative wasn’t as easy as we’d thought. It took a group of potential coopers with the determination and patience to navigate legal complexities, form a new entity, locate a potential property, and raise the capital necessary for a down payment. Even with the help of local cooperative associations like the Bay Area Community Land Trust or Sustainable Economies Law Center, few people had thousands of dollars in savings necessary to secure a mortgage. Our vision of transforming the extractive rental market into communities of co-housing seemed doomed from the start--there just wasn’t a way to make cooperatives an accessible option for everyone.
                              </p>
                              <p>The turning point in our story came like so many other community changing moments--we saw a flyer for a neighborhood meet-up in Oakland from the East Bay Permanent Real Estate Cooperative. The team at EBPREC had a vision for a different kind of co-op association, based on community ownership, resident control, and grassroots sources of local capital. They weren’t the first to try crowdfunding for housing co-ops, but they had a vision for a scalable network of houses across the East Bay that preserved affordability and was intentional about economic justice. Thanks to a new California law, advocated for by the Sustainable Economies Law Center which incubated EBPREC, neighbors could contribute up to $1,000 to creating new housing co-ops that would remain permanently affordable for local residents. It was cooperative housing for a new generation, where inclusivity was built into the design.
                              </p>
                              <p>We started CoopNet as a group of friends in the fall of 2018 with the goal of creating a digital platform that could scale the crowdfunding of cooperative housing across the country. Our plan was to solve three challenges facing potential cooperatives: the difficulty of connecting with other coopers, the complexity of starting an organization, and the challenge of raising the first $100,000 in capital. We believe that anyone can come together to form a co-op, that existing cooperatives and their supporters can help guide a new generation, and that socially conscious neighbors can invest in preserving their own communities. All we want to do is build a platform and bring people together to make it happen.
                              </p>
                              <iframe  title="introVideo" width="320" height="220" src="https://www.youtube.com/embed/YbAypb8cTSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default History;
