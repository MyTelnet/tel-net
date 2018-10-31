import IRead from "./IRead";
import IWrite from "./IWrite";
import IBaseHandler from "../../handlers/interfaces/IBase";
interface IBaseController<T extends IBaseHandler<Object>> extends IRead, IWrite {
}
export default IBaseController;
