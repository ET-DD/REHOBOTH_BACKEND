import { UserModelID } from "../../interfaces/user.interface";
import UserModel from "../../model/user.model";

export async function getAllUsers() {
    return await UserModel.find()
}

export async function showUsersbyId(id: string) {
    return await UserModel.findOne({_id: id})
}

export async function showUsersbyEmail(email: string) {
    return await UserModel.findOne({email: email}) as UserModelID
}
