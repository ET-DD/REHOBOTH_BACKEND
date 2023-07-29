import RouteModel from "../../model/routes.model";
// import  user from "../../model/user"
export const deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await RouteModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "route deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
