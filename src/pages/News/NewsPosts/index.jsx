import React, {useEffect, useState} from "react"
import DefaultLayout from "../../../layouts/DefaultLayout";
import Aos from "aos";
import Post from "../../../components/organisms/News/Posts/Post";
import TheLatestNews from "../../../components/molecules/TheLatestNews";


const NewsPost = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        Aos.init({
            startEvent: 'DOMContentLoaded',
        })

        async function fetchData() {
            const response = await fetch("https://api-us-east-1.graphcms.com/v2/ckzkhkva533a601xzcrcl80s4/master?query=%7B%0A%20%20posts(first%3A%209%2C%20orderBy%3A%20date_DESC)%20%7B%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20date%0A%20%20%7D%0A%7D%0A")
            const result = await response.json()
            setData(result.data)
        }
        fetchData()

    }, [])


    return (
        <DefaultLayout partOfFooterShow={true}>
            <Post/>
            <TheLatestNews
                title={{partOne: "Latest", partTwo: "Articles"}}
                data={data}
            />
        </DefaultLayout>
    )

}
export default NewsPost