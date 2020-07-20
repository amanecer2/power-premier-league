import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Player from './Player';

// ---- styles ------
const Tbody = styled.tbody`
            &td {
                text-align-center
            }
`;

const Thead = styled.thead`
            tr > td {
                text-align-center
            }
`;

const GoBackButton = styled.button`
    background-color: #4CAF50;/* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    
    //position: absolute;
    //left: 0;
  `;

const Header = styled.div`
    position: relative;
    height: 50px;
    display: flex;
    
    div.team-name {
        flex-grow: 2;
        display: flex;
        align-items: center;
        text-decoration: underline;
    }
    
    a{
        flex-grow: 1;
    }
`;

/**
 *
 * @param {TeamModel} team
 * @constructor
 */
function TeamPage({team}) {
    const players = team.squad.map((player, index) => (<Player player={player} key={player.id} index={index + 1}/>))
    const headers = (
        <Thead>
        <tr>
            <th># </th>
            <th>player</th>
            <th>position</th>
            <th>shirtNumber</th>
        </tr>
        </Thead>
    );

    return (
        <div>
                <Header>

                    <Link to={'/'}>
                        <GoBackButton>go back</GoBackButton>
                    </Link>

                    <div className={'team-name'}>{team.name}</div>
                </Header>

            <table>
                {headers}
                <Tbody>
                {players}
                </Tbody>
            </table>

        </div>
    )
}

export default TeamPage;