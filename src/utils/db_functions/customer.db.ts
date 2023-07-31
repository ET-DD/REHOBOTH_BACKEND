import CustomerModel from "../../model/customer.model";

export async function getAllCustomers() {
  try {
    const customers = await CustomerModel.find();
    return customers;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showCustomer(id: string) {
  try {
    const customer = await CustomerModel.findById(id);
    return customer;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



