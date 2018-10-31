import IRouter from "./IRouter";
import Base from "./../Base";

export default class Router extends Base implements IRouter {
	RouterId: string;
	ExerciseId: string;
	RouterTypeId: string;
	RouterName: string;
	RouterDescription: string;
	RouterTypeName: string;
	RouterTypeDescription: string;
	IsDeleted: boolean;
	TenantId: string;
	CreatedDateTime: Date;
	LastUpdatedDateTime: Date;
	CreatedBy: string;
	LastUpdatedBy: string;


	constructor() {
		super();

	}
}
