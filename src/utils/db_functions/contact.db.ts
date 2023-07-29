import contactModel from "../../model/contact.model";

export async function getAllContacts() {
  try {
    const contacts = await contactModel.find();
    return contacts;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showConact(id: string) {
  try {
    const contact = await contactModel.findById(id);
    return contact;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



