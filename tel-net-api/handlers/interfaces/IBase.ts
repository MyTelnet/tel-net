import IRead from "./IRead";
import IWrite from "./IWrite";
interface Base<T> extends IRead<T>, IWrite<T> {

}
export default Base;
