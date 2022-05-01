import axios from "axios"

//get first three posts
export const threePosts = async() =>{
    const response =await axios.get("https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20posts%20(first%3A%203%2C%20orderBy%3A%20date_DESC)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20date%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D")
    return response.data
}

//get first nine posts
export const ninePosts = async() =>{
    const response=await axios.get("https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20posts(first%3A%209%2C%20orderBy%3A%20date_DESC)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20date%0A%20%20%7D%0A%7D%0A")
    return response.data
}

//get all posts
export const allPosts = async() =>{
    const response = await axios.get("https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20posts(orderBy%3A%20date_DESC)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20date%0A%20%20%7D%0A%7D%0A")
    return response.data
}

//get current Post content
export const currentPostContent = async(id)=>{
    const response =await axios.get(`https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20post(where%3A%20%7Bslug%3A%20%22${id}%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20date%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20content%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`)
    return response.data
}

const postService = {
    threePosts,
    ninePosts,
    allPosts,
    currentPostContent
}

export default postService