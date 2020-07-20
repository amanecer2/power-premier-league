export class CompetitionsModel {

    constructor(data = {competition: {}, teams: []}) {
        this.competition = new Competition(data.competition);
        this.teams = data.teams.map( team => new Team(team));
    }
}

export class Competition {
    constructor(competition) {
        this.code = competition.code;
        this.name = competition.name;
        this.id = competition.id;
        this.country = competition && competition.area && competition.area.name;
    }
}

export class Team {
    constructor(team) {
        this.address = team.address;
        this.clubColors = team.clubColors;
        this.image = team.crestUrl || team.image;
        this.founded = team.founded;
        this.id = team.id;
        this.name = team.name;
        this.shortName = team.shortName;
        this.tla = team.tla;
        this.venue = team.venue;
        this.website = team.website;
    }
}