import PortfolioModel from "../../model/portfolio.model";

export async function getAllPortfolios() {
  try {
    const services = await PortfolioModel.find();
    return services;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showPortfolio(id: string) {
  try {
    const services = await PortfolioModel.findById(id);
    return services;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}
