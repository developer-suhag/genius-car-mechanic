import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/404.jpg';

const PageNotFound = () => (
    <div>
        <img src={error} alt="" />
        <div>
            <Link to="/">
                <Button variant="danger" type="button">
                    Go Back
                </Button>
            </Link>
        </div>
    </div>
);

export default PageNotFound;
