import { useState } from "react";
import dynamic from 'next/dynamic'
import cn from "classnames";
import styles from "../styles/Hero.module.sass";
import Slider from "react-slick";
import Icon from "./Icon";
import Player from "./Player";
import Connect from "./Connect";
import Popular from "./Popular"
import Footer from './Footer'
import Header from './Header'

const DynamicModal = dynamic(
    () => import('./Modal'),
    { ssr: false }
)

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
);

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
        <SlickArrow>
            <Icon name="arrow-next" size="14" />
        </SlickArrow>
    ),
    prevArrow: (
        <SlickArrow>
            <Icon name="arrow-prev" size="14" />
        </SlickArrow>
    ),
};

const items = [
    {
        title: "the creator network®",
        creator: "Enrico Cole",
        currency: "1.00 ETH",
        price: "$3,618.36",
        avatar: "/images/content/avatar-creator.jpg",
        image: "/images/content/video-preview.jpg",
        image2x: "/images/content/video-preview@2x.jpg",
    },
    {
        title: "Marco carrillo®",
        creator: "Enrico Cole",
        currency: "2.00 ETH",
        price: "$2,477.92",
        avatar: "/images/content/avatar-creator.jpg",
        image: "/images/content/video-preview.jpg",
        image2x: "/images/content/video-preview@2x.jpg",
    },
    {
        title: "the creator network®",
        creator: "Enrico Cole",
        currency: "1.00 ETH",
        price: "$3,618.36",
        avatar: "/images/content/avatar-creator.jpg",
        image: "/images/content/video-preview.jpg",
        image2x: "/images/content/video-preview@2x.jpg",
    },
    {
        title: "Marco carrillo®",
        creator: "Enrico Cole",
        currency: "2.00 ETH",
        price: "$2,477.92",
        avatar: "/images/content/avatar-creator.jpg",
        image: "/images/content/video-preview.jpg",
        image2x: "/images/content/video-preview@2x.jpg",
    },
];

const Hero = () => {

    const [visibleModalBid, setVisibleModalBid] = useState(false);
    return (
        <>
        <Header />
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.head}>
                        <div className={styles.stage}>
                            CREATE, SHARE, &amp; COLLECT DIGITAL MUSIC NFTS
                        </div>
                        <h2 className={cn("h3", styles.title)}>
                            Sell your beats for crypto
                        </h2>
                        <a className={cn("button-stroke", styles.button)} href="/search01">
                            Get started
                        </a>
                    </div>
                    <div className={styles.wrapper}>
                        <Slider className="creative-slider" {...settings}>
                            {items.map((x, index) => (
                                <div className={styles.slide} key={index}>
                                    <div className={styles.row}>
                                        <Player className={styles.player} item={x} />
                                        <div className={styles.details}>
                                            <div className={cn("h1", styles.subtitle)}>{x.title}</div>
                                            <div className={styles.line}>
                                                <div className={styles.item}>
                                                    <div className={styles.avatar}>
                                                        <img src={x.avatar} alt="Avatar" />
                                                    </div>
                                                    <div className={styles.description}>
                                                        <div className={styles.category}>Creator</div>
                                                        <div className={styles.text}>{x.creator}</div>
                                                    </div>
                                                </div>
                                                <div className={styles.item}>
                                                    <div className={styles.icon}>
                                                        <Icon name="stop" size="24" />
                                                    </div>
                                                    <div className={styles.description}>
                                                        <div className={styles.category}>Instant price</div>
                                                        <div className={styles.text}>3.5 ETH</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.wrap}>
                                                <div className={styles.info}>Current Bid</div>
                                                <div className={styles.currency}>{x.currency}</div>
                                                <div className={styles.price}>{x.price}</div>
                                                <div className={styles.info}>Auction ending in</div>
                                                <div className={styles.timer}>
                                                    <div className={styles.box}>
                                                        <div className={styles.number}>19</div>
                                                        <div className={styles.time}>Hrs</div>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <div className={styles.number}>24</div>
                                                        <div className={styles.time}>mins</div>
                                                    </div>
                                                    <div className={styles.box}>
                                                        <div className={styles.number}>19</div>
                                                        <div className={styles.time}>secs</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.btns}>
                                                <button
                                                    className={cn("button", styles.button)}
                                                    onClick={() => setVisibleModalBid(true)}
                                                >
                                                    Place a bid
                                                </button>
                                                <a
                                                    className={cn("button-stroke", styles.button)}
                                                    to="/item"
                                                >
                                                    View item
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <DynamicModal
                visible={visibleModalBid}
                onClose={() => setVisibleModalBid(false)}
            >
                <Connect />
            </DynamicModal>
            <Popular />
            <Footer />
        </>
    )
}

export default Hero