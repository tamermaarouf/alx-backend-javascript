export default class Building {
	constructor(sqft){
		this.sqft = sqft;
	}

	get sqft () { return this._sqft; }
	set sqft (setSqft) { this._sqft = setSqft; }
	evacuationWarningMessage () {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}