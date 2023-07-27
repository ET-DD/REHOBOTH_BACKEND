import BlogModel from "../../model/blog.model";

export async function getAllBlogs() {
  try {
    const blog = await BlogModel.find();
    return blog;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showBlog(id: string) {
  try {
    const blog = await BlogModel.findById(id);
    return blog;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}
