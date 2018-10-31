
interface IRead<T> {
	findById: (id: string, callback: (error: any, result: T) => void) => void;
	findOneByProperty: (propertyKey: string, propertyValue: string, callback: (error: any, result: T) => void) => void;
	findOneByPropertyList: (propertyKeyValueList: any, callback: (error: any, result: T) => void) => void;
	findMany: (callback: (error: any, result: T[]) => void) => void;
	findManyByProperty: (propertyKey: string, propertyValue: string, callback: (error: any, result: T[]) => void) => void;
	findManyByPropertyList: (propertyKeyValueList: any, callback: (error: any, result: T) => void) => void;
}

export default IRead;
