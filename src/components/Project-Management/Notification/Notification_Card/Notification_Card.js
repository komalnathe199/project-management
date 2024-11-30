import React from "react";
import "./Notification_Card.css";

function Notification_Card() {
  return (
    <section className="Notification_Card">
      <div className="Notification_Card_holder">
        <div className="row card-content-holder">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-3 ">
            <div className="img-holder">
              <img
                className="Notification_Card-img"
                src= {process.env.PUBLIC_URL + "https://via.placeholder.com/150"}
                alt="..."
              />
            </div>
          </div>

          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-8">
            <div className="text-holder">
              <h3>Order #2233 Is Ready to Dispatch</h3>
              <p>1 minute ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notification_Card;
