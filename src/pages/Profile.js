import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const Profile = () => {
    // User information would come from your user state, passed down as props or fetched directly in this component.

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">User Name</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;
