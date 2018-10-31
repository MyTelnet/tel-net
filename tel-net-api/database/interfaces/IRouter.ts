import * as mongoose from 'mongoose';
import IBase from './IBase';

interface IRouter extends mongoose.Document, IBase {
	RouterId: string;
}
export default IRouter;
