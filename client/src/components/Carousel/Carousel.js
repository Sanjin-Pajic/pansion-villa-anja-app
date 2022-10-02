import Carousel from "react-multi-carousel";
import "./Carousel.css";

export default ()  => {
    return (
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className="gallery-carousel"
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <img
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/71496933_144233913510917_7256392305093902336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tEFo2VkR76IAX-U8Ol4&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT-114njZhzemwXgX1L6mULCopxAD-n6FtjKSr_5eMxTMQ&oe=6360CCF6"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/73099377_148975689703406_471410976139247616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VhdI41Y3rNIAX84GjBA&tn=fyPO9LrKB2Hm8-gh&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT_8QNWglJnhAB4coB8f66avgs0nQZo9SiX91c2IsS8dGg&oe=635DA7D2"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
</Carousel>
    )
}