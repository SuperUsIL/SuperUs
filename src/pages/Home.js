import React from 'react';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container fluid className="p-5 bg-light text-center">
                <h1 className="display-3">Welcome to SuperUs</h1>
                <p className="lead">
                    SuperUs is a revolutionary platform designed to foster community support, collaboration, and mutual aid.
                    Through SuperUs, community members can offer assistance, share resources, and engage in collaborative efforts
                    to enhance collective well-being.
                </p>
                <hr className="my-2" />
                <p>
                    Whether you're here to seek help, contribute your skills, or discover community-driven projects,
                    you're in the right place. SuperUs connects individuals with opportunities to support each other in a variety
                    of meaningful ways.
                </p>
                <p className="lead">
                    <Link to="/signup"> <Button color="primary">Sign Up</Button> </Link>

                </p>
            </Container>
            <Container>
                <Row>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
