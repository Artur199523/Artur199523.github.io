import React, {useEffect} from "react";
import TheLatestNews from "../../molecules/TheLatestNews";
import Button from "../../atoms/Button";
import LoadSpinner from "../../atoms/LoadSpinner";
import {useDispatch, useSelector} from "react-redux";
import {allPosts, ninePosts} from "../../../Store/NewsPosts/postSlice";


const NewsLatest = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(ninePosts())
    }, [])

    const showAll = () => {
        dispatch(allPosts())
    }

    return (
        <section className="home-block">
            <TheLatestNews
                title={{partOne: "here's", partTwo: " what's happening"}}
                animation={true}
                data={posts?.allPosts ?  posts.allPosts : posts.firstNinePosts }
            />
            {
                <div className={`control text-center ${posts?.allPosts && "hidden"}`} data-aos='fade-up'
                     data-aos-delay='200'>
                    <Button onClick={showAll} text={"view all"} type={"gold"}>
                        {posts.isLoading && <LoadSpinner/>}
                    </Button>
                </div>
            }

        </section>
    )
}

export default NewsLatest