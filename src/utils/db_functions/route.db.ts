import mongoose from "mongoose";
import RoutesModel from "../../model/routes.model";

export async function getAllRoutes() {
  try {
    const routes = await RoutesModel.find();
    return routes;
  } catch (error) {
    // Handle error
    console.error("Error retrieving routes:", error);
    throw error;
  }
}

export async function showRoute(id: string) {
  try {
    const routes = await RoutesModel.findById(id);
    return routes;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}

export async function getAllPath(id: string) {
  try {
    const Routes = await RoutesModel.findById(id);
    const paths = Routes.path;
    return paths;
  } catch (error) {
    // Handle error
    console.error("Error retrieving note:", error);
    throw error;
  }
}

export async function showPath(id: string) {
    const paths = await RoutesModel.findOne({
      "paths._id": new mongoose.Types.ObjectId(id)}, { "paths.$": 1 }
    );

    return paths;
  }
