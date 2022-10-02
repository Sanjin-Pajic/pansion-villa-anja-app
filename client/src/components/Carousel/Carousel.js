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
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/146139126_417366589530980_7356437639196365688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BbzhPUkbwmgAX-1gXmS&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9P1DrE1fgMwJ3PAJY5L3WDJ3D0RSjJAtbQbn0YxLDF3g&oe=635E71DF"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/202550807_497405221527116_2395151266857123671_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-fTYBjSTu4UAX-PCSwm&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT-07Oui_HV51wUQ1PxoL08JJb2sXx04BXHWQIF1BgnwcQ&oe=63602ACB"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/117573657_296169758317331_4657330578551849363_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c-2zmDU3JD4AX8IHw6o&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9eYKsgQGN7HH6PnGACuP_uymCSzBuftk4ygMHewsHd9Q&oe=635FD869"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/71496933_144233913510917_7256392305093902336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tEFo2VkR76IAX-U8Ol4&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT-114njZhzemwXgX1L6mULCopxAD-n6FtjKSr_5eMxTMQ&oe=6360CCF6"
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