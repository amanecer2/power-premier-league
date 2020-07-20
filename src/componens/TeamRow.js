import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: start;
    align-item: space-around;
    align-items: center;
    
    margin: 0 10px;
    padding: 10px 0px;
    
    height: 50px;
    
    border-bottom: 1px solid grey;
    //border-left: 1px solid grey;
   // border: 1px solid grey;
    div {
        align-self: auto;
        padding: 0 5px;
    }
`;
const Image = styled.img`
    width: 30px;
    height: 30px
`;
/**
 *
 * @param {Team} team
 * @returns {*}
 */
export default function ({team, onTeamClickHandler}) {
    return (
        <Link to={`/${team.id}`}>
            <Row onClick={() => onTeamClickHandler(team.id)}>
                <div>
                    <Image src={team.image}/>
                </div>
                <div>{team.name}</div>
                <div>{team.founded}</div>
                <div>{team.address}</div>
            </Row>
        </Link>
    )
}