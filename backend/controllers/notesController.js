export function getAllNotes (req, res) {
    res.status(200).send("You just fetched the Notes");
}

export function createNote(req, res) {
    res.status(201).json({message:"post created successfully!"});
}

export function updateNote(req, res) {
    res.status(200).json({message:"Post updated successfully!"}); 
}

export function deleteNote(req, res) {
    res.status(200).json({message:"Note deleted successfully!"}); 
}
