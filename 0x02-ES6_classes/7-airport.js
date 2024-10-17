export default class Airport {
	constructor(name, code){
		this.name = name;
		this.code = code
	}

	get code() { return this._code; }
	set code(setCode) { this._code = setCode; }
	get name() { return this._name; }
	set name(setName) { this._name = setName; }
	static desc() {return this._code}
}