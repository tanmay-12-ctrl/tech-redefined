import { Request, Response } from "express"
import { Post, postDocument } from "../modals/postSchema"

export const showAllPost = async (req: Request, res: Response) => {
    // show all post
    try {
        const posts = await Post.find()
        console.log("reached")
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: (err as Error).message })
    }
}

export const createNewPost = (req: Request, res: Response) => {
    // create new post
    console.log(req.body)
    const { title, content, image } = req.body
    const newPost = new Post({
        title: title,
        content: content,
        image: image
    })
    newPost.save()
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: (err as Error).message })
        })
}

export const showSpecificPost = (req: Request, res: Response) => {
  // Extract the post ID from the request parameters
  const id = req.params.id;

  // Find the post by ID and populate the owner field
  Post.findById(id)
    .populate("owner","-password") // Populates the `owner` field with user data
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: (err as Error).message });
    });
};


export const updatePost = (req: Request, res: Response) => {
    // update post
    const id = req.params.id
    const { title, content, image } = req.body
    Post.findByIdAndUpdate(id, {
        title: title,
        content: content,
        image: image
    }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(500).json({ message: (err as Error).message })
    })

}

export const deletePost = (req: Request, res: Response) => {
    // delete post
    const id = req.params.id
    Post.findByIdAndDelete(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: (err as Error).message })
        })
}