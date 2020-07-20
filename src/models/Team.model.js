import {Team} from "./competitionsModel";

export class TeamModel extends Team {
    constructor(team = {squad: []}){
        super(team);
        this.squad = team.squad.map( s => new Squad(s));
    }
}

export class Squad {
    constructor(squad) {
        this.id = squad.id;
        this.name = squad.name;
        this.position = squad.position;
        this.dateOfBirth = squad.dateOfBirth;
        this.countryOfBirth = squad.countryOfBirth;
        this.nationality = squad.nationality;
        this.shirtNumber = squad.shirtNumber;
        this.role = squad.role;
    }
}