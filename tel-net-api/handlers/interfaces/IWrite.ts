
interface IWrite<T> {
	create: (item: T, callback: (error: any, result: any) => void) => void;
	createMany: (list: [T], callback: (error: any, result: any) => void) => void;
	update: (item: T, callback: (error: any, result: any) => void) => void;
	updateMany: (list: [T], callback: (error: any, result: any) => void) => void;
	delete: (item: T, callback: (error: any, result: any) => void) => void;
	deleteMany: (list: [T], callback: (error: any, result: any) => void) => void;
}

export default IWrite;
