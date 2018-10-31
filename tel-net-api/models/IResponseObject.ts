
interface IResponseObject<T> {
	Success: boolean
	Message: string;
	Data: T;
}
export default IResponseObject;
