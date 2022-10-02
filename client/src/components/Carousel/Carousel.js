import Carousel from "react-multi-carousel";
import "./Carousel.css";

export default ()  => {
    return (
        <div
        style={{
          paddingBottom: '30px',
          position: 'relative',
          backgroundColor: 'white'
        }}
      >
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
          renderDotsOutside
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
            src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/306005306_770400800894222_9200875557884604221_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_59lZitmxKsAX9MaDnc&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9UXbBidJMEufrqOfWkT7OxV9Vm8JLTTK6gFaxW4Sb6lA&oe=633EA622"
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/72779219_145164743417834_6811042395937832960_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=svlvD-5nOu0AX9Mca5A&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT8La6i-YJvE0rXooJV3fmy55mKclijH2eBdp8S9YCqfVA&oe=635F7C8B"
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
            src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/202550807_497405221527116_2395151266857123671_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-fTYBjSTu4UAX-PCSwm&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT-07Oui_HV51wUQ1PxoL08JJb2sXx04BXHWQIF1BgnwcQ&oe=63602ACB"
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/101547881_251256959475278_2603358194126290944_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Eb4Q80XrBL4AX8wU7_o&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT-pFXtXYiBSaDFGnZZ-lubS-QyIdcvD5bopdF3d50ehBQ&oe=6360836F"
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
        </Carousel>
      </div>
    )
}