import React from 'react';
import { Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className="display-3">SuperUs</h1>
                <p className="lead">This is the SuperUs application.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </div>
        </div>
    );
};

export default Home;
