import express from 'express';

import  {getPosts, createPost} from '../controllers/posts.js';

const router = express.Router();


//localhost:5000/
//after connect successfully:
router.get('/',getPosts); //set all request and response to a new file
                            //import function from that file, make function looks clean
router.post('/',createPost);


export default router;