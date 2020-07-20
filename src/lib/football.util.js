import {CompetitionsModel} from "../models/competitionsModel";
import {TeamModel} from "../models/Team.model";
const KEY = 'e954209397e3416ba6c386b6c48a115d';

//// https://www.football-data.org/documentation/quickstart

export const PRIMER_LEAGUE_ID = 2021;
const ENUM = {
    LEAGUES: 'leagues',
    TEAMS: 'teams',
    BASE_URL: 'http://api.football-data.org/v2'
};

/************************************************************
 *                                                          |
 * Foot ball api helper. reveal pattern with response cache |
 *                                                          |
 ************************************************************/


/**
 * Add token to football api ajax calls
 * We can use fetch-intercept for butter http middleware
 * But for this usage it's enough;
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
        [ENUM.LEAGUES]: {},
        [ENUM.TEAMS]: {}
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
        const data = await footbalApiFetch(`${ENUM.BASE_URL}/competitions/${leagueID}/teams`);
        const competitionsModel = new CompetitionsModel(data);
        cache[ENUM.LEAGUES][leagueID] = competitionsModel;
        return competitionsModel;
    };

    /**
     * Get data for specific team
     * @param teamID
     * @returns {Promise<TeamModel>}
     */
    const getTeamData = async (teamID = 57) => {
        const data = await footbalApiFetch(`${ENUM.BASE_URL}/teams/${teamID}`);

        const teamModel = new TeamModel(data);
        cache[ENUM.TEAMS][teamID] = teamModel;
        return teamModel;
    };

    return {
        getTeams: (leaguesID = PRIMER_LEAGUE_ID) => returnIfCached(ENUM.LEAGUES, leaguesID) || getTeams(leaguesID),
        getTeamData: (teamID = 57) => returnIfCached(ENUM.TEAMS, teamID) || getTeamData(teamID)
    }
})();
