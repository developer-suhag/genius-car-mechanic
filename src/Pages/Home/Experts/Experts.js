import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-',
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-',
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-',
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-',
    },
    {
        img: mechanic5,
        name: 'Jhon Doe',
        expertize: '-Washing Expert-',
    },
];

const Experts = () => (
    <div className="container">
        <h3 className="text-success fs-2">Experts</h3>
        <div className="row mt-5">
            {experts.map((expert) => (
                <Expert key={expert.name} expert={expert} />
            ))}
        </div>
    </div>
);

export default Experts;
