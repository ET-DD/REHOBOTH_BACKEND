import HeroModel from "../../model/hero.model";

export async function getAllHeros() {
  try {
    const heros = await HeroModel.find();
    return heros;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showHero(id: string) {
  try {
    const heros = await HeroModel.findById(id);
    return heros;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



