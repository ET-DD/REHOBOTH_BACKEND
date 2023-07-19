import NoteModel from "../../model/note.model";
// import  user from "../../model/user"
export const deleteFolder = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await NoteModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "folder deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
