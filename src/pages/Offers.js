import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';

const Offers = () => {
    // This state would hold your offers, fetched from your API.
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Fetch the offers from your API and set them using setOffers.
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Offer Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {offers.map((offer, index) => (
                    <tr key={offer.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{offer.name}</td>
                        <td>{offer.description}</td>
                        <td><Button color="primary">View</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Offers;
