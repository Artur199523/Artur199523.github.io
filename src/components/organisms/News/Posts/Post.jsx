import React, {useEffect, useState} from "react";
import "./style.scss"
import {useLocation, useParams} from "react-router-dom";
import {FacebookShareButton} from "react-share";
import parse from 'html-react-parser';

const Post = () => {

    const location = useLocation()
    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {

        async function fetchData() {
            const url = location.pathname.split("/")[2].toString()
            const response = await fetch(`https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20post(where%3A%20%7Bslug%3A%20%22${url}%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20date%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20content%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`)
            const result = await response.json()

            result.data.post.content.html = parse(result.data.post.content.html)

            setData(result.data)
        }

        fetchData()

    }, [location.pathname])


    return (
        <section className="blog-detail" data-aos="fade-up" data-aos-delay="400">
            <div className="container">
                <div className="bd-wrap">
                    <h1>{data?.post?.title}</h1>
                    <div className="author">
                        By <span className="name">{data?.post?.author?.name}</span> <em>|</em>
                        <span>{data?.post?.date}</span>
                    </div>
                    <div className="p-share">
                        <FacebookShareButton
                            url={process.env.REACT_APP_PRODUCTION_URL+"/"+ id}
                            quote={data?.post?.title}
                            hashtag={"#KOMPETE"}
                            className="p-facebook"
                        >.</FacebookShareButton>
                        <a href={`https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}&hashtags=#KOMPETE`}
                           className="p-twitter twitterShare" target="_blank" rel="noreferrer">
                        </a>
                        <a href={`https://www.reddit.com/submit?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}`}
                           className="reddit redditShare" target="_blank" rel="noreferrer">
                        </a>
                        <a href={`https://telegram.me/share/url?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}&title=${data?.post?.title}`}
                           className="telegram telegramShare" target="_blank" rel="noreferrer">
                        </a>
                        <p>Share</p>
                    </div>
                    <div className="thumb">
                        <img alt="" src={data?.post?.image?.url}/>
                    </div>
                    <div className="content">{data?.post?.content?.html}</div>
                    <div className="author">
                        By <span className="name">{data?.post?.author?.name}</span> <em>|</em>
                        <span>{data?.post?.date}</span>
                    </div>
                    <div className="p-share">
                        <FacebookShareButton
                            url={process.env.REACT_APP_PRODUCTION_URLid}
                            quote={data?.post?.title}
                            hashtag={"#KOMPETE"}
                            className="p-facebook"
                        >.</FacebookShareButton>
                        <a href={`https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}&hashtags=#KOMPETE`}
                           className="p-twitter twitterShare" target="_blank" rel="noreferrer">
                        </a>
                        <a href={`https://www.reddit.com/submit?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}`}
                           className="reddit redditShare" target="_blank" rel="noreferrer">
                        </a>
                        <a href={`https://telegram.me/share/url?url=${process.env.REACT_APP_PRODUCTION_URL + location.pathname}&text=${data?.post?.title}&title=${data?.post?.title}`}
                           className="telegram telegramShare" target="_blank" rel="noreferrer">
                        </a>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post
