import RepositoryBase from "./RepositoryBase";
import RouterModel from "../../models/router/Router";
import IRouter from "../interfaces/IRouter";
import RouterSchema from "./../schemas/Router";

class RouterRepository extends RepositoryBase<IRouter> {
    constructor() {
        super(RouterSchema);
    }
}

Object.seal(RouterRepository);
export default RouterRepository;
