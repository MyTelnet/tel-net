import IBase from "./IBase";

class Base implements IBase {
	IsDeleted: boolean;
	CreatedDateTime: Date;
	LastUpdatedDateTime: Date;
	LastUpdatedBy: string;

	constructor() {

	}
}

Object.seal(Base);
export default Base;
