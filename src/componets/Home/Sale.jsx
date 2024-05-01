import React, { useEffect, useState } from "react";

const Sale = () => {
  const targetTime = new Date("2024-05-10T12:00:00");

  const calculateTimeRemaining = (targetTime) => {
    const now = new Date();
    const difference = Math.max(targetTime - now, 0) / 1000; // in seconds

    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);
    const seconds = Math.floor(difference % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetTime)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetTime));
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [targetTime]);
  return (
    <>
      <div className="mb-5 pb-1 pb-xl-5" />
      {/* <p>Time Remaining: {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}</p> */}
      <section
        className="deal-timer position-relative d-flex align-items-end overflow-hidden"
        style={{ backgroundColor: "#ebebeb" }}
      >
        <div
          className="background-img"
          style={{ backgroundImage: 'url("/assets/images/deal_timer_bg.jpg")' }}
        />
        <div className="deal-timer-wrapper container position-relative">
          <div className="deal-timer__content pb-2 mb-3 pb-xl-5 mb-xl-3 mb-xxl-5">
            <p className="text_dash text-uppercase text-red fw-medium gclass-text">
              Deal of the week
            </p>
            <h3 className="h1 text-uppercase gclass-text">
              <strong>Spring</strong> Collection
            </h3>
            <a
              href="#"
              className="btn-link default-underline text-uppercase fw-medium mt-3 gclass-text"
            >
              Shop Now
            </a>
          </div>
          <div
            className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown"
            data-date="18-3-2024"
            data-time="06:50"
          >
            <div className="day countdown-unit">
              <span className="countdown-num d-block">{timeRemaining.days}</span>
              <span className="countdown-word fw-bold text-uppercase text-secondary gclass-text-secondary">
                Days
              </span>
            </div>
            <div className="hour countdown-unit">
              <span className="countdown-num d-block">{timeRemaining.hours}</span>
              <span className="countdown-word fw-bold text-uppercase text-secondary gclass-text-secondary">
                Hours
              </span>
            </div>
            <div className="min countdown-unit">
              <span className="countdown-num d-block">{timeRemaining.minutes}</span>
              <span className="countdown-word fw-bold text-uppercase text-secondary gclass-text-secondary">
                Mins
              </span>
            </div>
            <div className="sec countdown-unit">
              <span className="countdown-num d-block">{timeRemaining.seconds}</span>
              <span className="countdown-word fw-bold text-uppercase text-secondary gclass-text-secondary">
                Sec
              </span>
            </div>
          </div>
        </div>
        {/* /.deal-timer-wrapper */}
      </section>
      <div className="mb-5 pb-1 pb-xl-5"></div>
      <section className="grid-banner container mb-3">
        <div className="row">
          <div className="col-md-6">
            <div className="grid-banner__item grid-banner__item_rect position-relative">
              <div
                className="background-img"
                style={{
                  backgroundImage: 'url("/assets/images/banner_1.jpg")',
                }}
              />
              <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                <h6 className="text-uppercase text-white fw-medium mb-3 gclass-text-light">
                  Starting At $19
                </h6>
                <h3 className="text-white mb-3 gclass-text-light">
                  Women's T-Shirts
                </h3>
                <a
                  href="#"
                  className="btn-link default-underline text-uppercase text-white fw-medium gclass-text-light"
                >
                  Shop Now
                </a>
              </div>
              {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
            </div>
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <div className="grid-banner__item grid-banner__item_rect position-relative">
              <div
                className="background-img"
                style={{
                  backgroundImage: 'url("/assets/images/banner_2.jpg")',
                }}
              />
              <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
                <h6 className="text-uppercase fw-medium mb-3 gclass-text">
                  Starting At $39
                </h6>
                <h3 className="mb-3 gclass-text">Men's Sportswear</h3>
                <a
                  href="#"
                  className="btn-link default-underline text-uppercase fw-medium gclass-text"
                >
                  Shop Now
                </a>
              </div>
              {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
            </div>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </section>
    </>
  );
};

export default Sale;
