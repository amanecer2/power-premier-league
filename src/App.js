import React, {useEffect, useState} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import {CompetitionsModel} from "./models/competitionsModel";

import './App.css';

import TeamPage from './componens/TeamPage'
import League from './componens/League';
import {footbalApiHelper, PRIMER_LEAGUE_ID} from "./lib/football.util";
import {TeamModel} from "./models/Team.model";


function App() {

    const [competitionsModel, setCompetitionsModel] = useState(new CompetitionsModel());
    const [teamModel, setTeamModel] = useState(new TeamModel());

    useEffect(() => {
        fetchLeagueTeams(PRIMER_LEAGUE_ID)
    }, []);

    const fetchLeagueTeams = async (leagueId) => {
        const data = await footbalApiHelper.getTeams(leagueId);
        setCompetitionsModel(data)
    };

    const fetchTeamData = async (teamId) => {
        const teamData = await footbalApiHelper.getTeamData(teamId);
        setTeamModel(teamData);
    };

    const teamClickHandler = (teamId) => {
        fetchTeamData(teamId)
    };


    return (
        <Router>
            <div>
                <Switch>
                    {teamModel.name
                        ? <Route path="/:id"
                                 render={({match}) =>
                                     <TeamPage
                                         match={match}
                                         team={teamModel}
                                     />}>
                          </Route>
                        : ''}


                    <Route path="/">
                        <League
                            teamClickHandler={teamClickHandler}
                            competitionsModel={competitionsModel}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;