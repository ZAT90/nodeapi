const { validationResult } = require('express-validator');
const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const posts = Post.find().select('_id title body')
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => console.log(`get post error: ${err}`))
}

exports.createPost = (req, res, next) => {
    console.log('CREATING POST: ', req.body)
    try {
        const errors = validationResult(req);
        console.log('CREATING POST errors: ', errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array()[0].msg,
            });
        }
        const post = new Post(req.body);
        post.save().then(post => {
            console.log('savedoc: ', savedDoc);
            //  res.render("secrets");
            res.status(200).json({
                success: true,
                post
            });
        })

    } catch (error) {
        console.log('error in catch bloc: ', error);
        next(error)
    }
    // next()

}
// exports.createPost = (req, res) => {
//     const post = new Post(req.body)
//     post.save().then( savedDoc => {
//         console.log('savedoc: ',savedDoc);
//         //  res.render("secrets");
//         res.status(200).json({
//             post: savedDoc
//         })
//     })
//     // .catch((err) => {
//     //     console.log(err);
//     //     return res.status(400).json({
//     //         error: err
//     //     })
//     // })
//     // post.save((err, result) => {
//     //     if (err) {
//     //         return res.status(400).json({
//     //             error: err
//     //         })
//     //     }
//     //     res.status(200).json({
//     //         post: result
//     //     })
//     // }
//   //  )
//     console.log('CREATING POST: ', req.body)
// }
