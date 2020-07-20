import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Player from './Player';
import Image from './styled/Image';

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

const SubHeader = styled.div`
   a:link {
    text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    a:active {
      text-decoration: underline;
    }
`

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
            <th>Player</th>
            <th>Position</th>
            <th>Shirt number</th>
        </tr>
        </Thead>
    );

    const navigateToTeamWebsite = ()=> {
        const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        window.open(team.website, team.name, windowFeatures)
    };

    return (
        <div>
                <Header>

                    <Link to={'/'}>
                        <GoBackButton>go back</GoBackButton>
                    </Link>

                    <div className={'team-name'}>
                        <div><Image src={team.image}/></div>
                        {team.name}
                    </div>
                </Header>

            <SubHeader>
                <div >{team.address}</div>
                <div onClick={() => navigateToTeamWebsite()}>website: <a>{team.website}</a></div>
                <div >Founded at: {team.founded}</div>
            </SubHeader>

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