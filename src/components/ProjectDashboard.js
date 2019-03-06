import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Tab, Container, Tabs, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import FollowProject from "./FollowProject";

function ProjectJumbo(props) {
    return (
        <Jumbotron fluid className="projectJumbo">
            <Image fluid className = "projectJumboImage" src={require("../images/projectDash.png")} />
        </Jumbotron>
    );
}

function ProjectSummary(props) {
    return (
        <Jumbotron fluid className="projectSummary">
            <ProgressBar variant="success" class="projectProgress" animated now={50} />
            <div className="projectSummaryText">
                <h1>$123,456</h1>
                <p>Already invested into Oakland Housing Association</p>
                <h2>900</h2>
                <p>Socially concious investors</p>
                <h3>$1000</h3>
                <p>Minimum investment package</p>
            </div>
        </Jumbotron>
    );
}

function ProjectTitle(props) {
    return (
        <Jumbotron className="projectTitle">
            <h1>Oakland Home</h1>
            <p>The Oakland Housing Association is acquiring a new property and we're getting them the money. </p>
        </Jumbotron>
    );
}

function ProjectAbout(props) {
    return (
        <Jumbotron className="projectContent">
            <h1>Roof and Seed</h1>
            <p>A combination of housing and community gardens... </p>
            <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet.</p>
            <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet.</p>
            <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet.</p>
            <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet.</p>
        </Jumbotron>
    );
}
function ProjectCommunity(props) {
    return (
        <Jumbotron className="projectContent">
            <h1>Stories from Oakland</h1>
            <p>The Oakland community most directly affected by the presence and preservation of this estate ....</p>
            <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat dictum convallis. Vestibulum porttitor placerat erat id egestas. Mauris scelerisque, sem ac sagittis fringilla, justo diam facilisis augue, sed lobortis dolor libero sed dui. Aenean auctor purus vel erat porttitor, ac pellentesque ipsum pellentesque. Aliquam dapibus convallis nunc, eu vulputate dui molestie sit amet. Nulla facilisi. Sed sed lacus in arcu consequat tincidunt nec at libero. Ut condimentum tincidunt sem, vitae bibendum tortor suscipit non. Praesent iaculis, neque a ultrices luctus, libero felis accumsan dolor, ut lobortis dolor ante at ex. Praesent sit amet lectus ut purus imperdiet pretium. Maecenas posuere enim sem, sed scelerisque nisi mollis eu. Ut luctus risus ac nunc mattis, vel auctor dolor porta. Nullam porta semper convallis. Etiam vulputate tempor ex, eget tincidunt nibh. Phasellus in sem id sapien commodo laoreet.</p>
        </Jumbotron>
    );
}


function ProjectActions(props) {
    return (
            <Container >
                <Row>
                    <Col xs={10}><Button block variant="info">CONTRIBUTE TO THIS PROJECT</Button></Col>
</Row>
                <Row className="actionButtons">
                    <Col>
                        <FollowProject />
                    </Col>
                    <Col>
                        <Image className = "socialButtons" src="http://uwc.211ct.org/wp-content/uploads/2017/07/socialmediabar-768x199.png" />
                    </Col>
                </Row>
            </Container>
    );
}

class ProjectDashboard extends Component {
    render() {
        return (
            <div className="ProjectDashboard">
                <NavHeader />
                <ProjectTitle />
                <Table fluid>
                    <Row>
                        <Col xs={8}>
                            <ProjectJumbo />
                        </Col>
                        <Col>
                            <ProjectSummary />
                            <ProjectActions />
                        </Col>
                    </Row>
                </Table>
                <Container className = "projectTabs">
                    <Tabs  defaultActiveKey="about" id="projectTabs">
                        <Tab className = "projectTab" eventKey="about" title="About">
                            <ProjectAbout />
                        </Tab>
                        <Tab className = "projectTab" eventKey="community" title="Community">
                            <ProjectCommunity />
                        </Tab>
                    </Tabs>
                </Container>
                <Footer />
                </div>
                );
            }
        }
        
        export default ProjectDashboard;
