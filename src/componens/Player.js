import React from 'react';

import styled from 'styled-components';

const Tr = styled.tr`
    td {
        text-align: center;
    }
`;
/**
 *
 * @param {Squad} player
 */
export default function ({player, index}) {
    return (
        <Tr>
            <th>{index}</th>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.shirtNumber}</td>
        </Tr>

    )
}