import React from 'react';
import { Tab, Nav, Offcanvas } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Notification_Card from "../Notification/Notification_Card/Notification_Card";
import "./Notification.css"

const Notification = ({ handleClose, show }) => {


  return (
    <section className='Notification'>
      <Offcanvas
        className="notification-offcanvas"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="notifications-banner-img-holder">
            <img
              className="notifications-banner-img"
              src={process.env.PUBLIC_URL + "/assets/Image/photos/projectmanage.jpg"}
              alt="..."
            />
          </div>

          <div className="notification-tab-holder">
            <Notification_Card            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
};

export default Notification;
