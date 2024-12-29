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
    // show specific post
    const id = req.params.id
    Post.findById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: (err as Error).message })
        })
}

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