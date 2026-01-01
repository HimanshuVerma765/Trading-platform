import React from "react";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6">
          <h1 className="mb-5 mt-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4 mb-3">Customer-first always</h2>
          <p className="mb-3 text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4 mb-3">No spam or gimmicks</h2>
          <p className="mb-3 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mb-3">The Zerodha universe</h2>
          <p className="mb-3 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mb-3">Do better with money</h2>
          <p className="mb-3 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a href="" className="mx-5 text-decoration-none">Explore our Products. <i class="fa-solid fa-arrow-right"></i></a>
            <a href="" className="text-decoration-none">Try Kite Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
