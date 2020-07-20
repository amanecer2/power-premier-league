import {CompetitionsModel} from "../models/competitionsModel";
import {TeamModel} from "../models/Team.model";
const KEY = 'e954209397e3416ba6c386b6c48a115d';

//// https://www.football-data.org/documentation/quickstart

export const PRIMER_LEAGUE_ID = 2021;
/************************************************************
 *                                                          |
 * Foot ball api helper. reveal pattern with response cache |
 *                                                          |
 ************************************************************/


/**
 * Add token to football api ajax calls
 * @param uri
 * @returns {Promise<any>}
 */
const footbalApiFetch = async (uri) => {
    const _data = await fetch(uri,
        {
            headers: {
                'X-Auth-Token': KEY
            }
        });
    return await _data.json();
}

/**
 * singleton helper
 * @type {{getTeamData, getTeams}}
 */
export const footbalApiHelper = (() => {
    const cache = {
        leagues: {},
        teams: {}
    };


    const returnIfCached = (name, id) => {
        if (cache[name][id]) {
            return Promise.resolve(cache[name][id])
        }
        return false;
    };

    /**
     * Get the league data and it's teams
     * @param leagueID
     * @returns {Promise<CompetitionsModel>}
     */
    const getTeams = async (leagueID = PRIMER_LEAGUE_ID) => {
        const data = await footbalApiFetch(`http://api.football-data.org/v2/competitions/${leagueID}/teams`)
        const competitionsModel = new CompetitionsModel(data);

        cache.leagues[leagueID] = competitionsModel;
        return competitionsModel;
    };

    /**
     * Get data for specific team
     * @param teamID
     * @returns {Promise<TeamModel>}
     */
    const getTeamData = async (teamID = 57) => {
        const data = await footbalApiFetch(`http://api.football-data.org/v2/teams/${teamID}`);

        const teamModel = new TeamModel(data);
        cache.teams[teamID] = teamModel;
        return teamModel;
    };

    return {
        getTeams: (leaguesID = PRIMER_LEAGUE_ID) => returnIfCached('leagues', leaguesID) || getTeams(leaguesID),
        getTeamData: (teamID = 57) => returnIfCached('teams', teamID) || getTeamData(teamID)
    }
})();
