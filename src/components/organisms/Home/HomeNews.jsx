import React, {useEffect, useState} from "react";
import TheLatestNews from "../../molecules/TheLatestNews";
import Button from "../../atoms/Button";
import {useDispatch, useSelector} from "react-redux";
import {threePosts} from "../../../Store/NewsPosts/postSlice";

const HomeNews = () => {
    const {firstThreePosts} = useSelector(state=>state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(threePosts())
    }, [])

    return (
        <section className="home-block">
            <div className="how-one">
                <TheLatestNews
                    title={{partOne:"here's",partTwo:" the latest"}}
                    animation={true}
                    data={firstThreePosts}
                />
                    <div className="control text-center" data-aos='fade-up'
                         data-aos-delay='200'>
                        <Button route={"/news"} text={"view all"} type={"gold"}/>
                    </div>
            </div>
        </section>
    )
}

export default HomeNews