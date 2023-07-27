import ServiceModel from "../../model/service.model";

export async function getAllServices() {
  try {
    const services = await ServiceModel.find();
    return services;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showService(id: string) {
  try {
    const services = await ServiceModel.findById(id);
    return services;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}
