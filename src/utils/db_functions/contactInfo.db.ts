import ContactInfoModel from "../../model/contactInfo.model";

export async function getAllContactInfos() {
  try {
    const contacts = await ContactInfoModel.find();
    return contacts;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showConactinfo(id: string) {
  try {
    const contact = await ContactInfoModel.findById(id);
    return contact;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



