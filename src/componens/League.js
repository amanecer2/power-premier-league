import React from 'react';
import styled from 'styled-components';

import TeamRow from "./TeamRow";

const Header = styled.h1`
    text-align: center;
`
/**
 *
 * @param {CompetitionsModel} competitionsModel
 * @returns {*}
 * @constructor
 */
function League({competitionsModel, teamClickHandler}) {

    return (
        <section>
            <Header>{competitionsModel && competitionsModel.competition && competitionsModel.competition.name}</Header>

                {competitionsModel.teams.map(t => (
                    <TeamRow
                        onTeamClickHandler={(_) => teamClickHandler(t.id)}
                        team={t}
                        key={t.id}
                    />
                ))}
        </section>
    )
}

export default League;