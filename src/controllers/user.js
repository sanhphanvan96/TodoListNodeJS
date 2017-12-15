import {User} from '../models/modelConfig';

export async function createUser(user) {
    try {
        return await new User(user).save();
    } catch (e) {
        throw e;
    }
}
