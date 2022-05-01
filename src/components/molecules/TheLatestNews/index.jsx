import React from "react"
import {Link, useLocation} from "react-router-dom";
import "./style.scss"

const TheLatestNews = ({title, animation, data}) => {
    const location = useLocation()

    const newRoute = (pathname) => {
        if (location.pathname.split("/")[2] ===pathname) {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className="home-latest">
            <div className="container">
                <div className="block-caption" data-aos={animation && 'fade-up'} data-aos-delay={animation && '400'}>
                    <h2>{title.partOne} <span>{title.partTwo}</span></h2>
                </div>
                <div className="row row-fix" id="blog-list-9" data-aos={animation && 'fade-up'}
                     data-aos-delay={animation && '400'}>

                    {
                        data?.posts?.map((post, i) =>
                            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="item">
                                    <div className="thumb">
                                        <Link onClick={() => newRoute(post.slug)} to={`/news/${post.slug}`}>
                                            <img alt="" src={post.image.url}/>
                                        </Link>
                                    </div>

                                    <div className="des">
                                        <div className="date">{post.date}</div>
                                        <h3>{post.title}</h3>
                                        <Link onClick={() => newRoute(post.slug)} to={`/news/${post.slug}`}
                                              className="readmore">read
                                            more</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default TheLatestNews