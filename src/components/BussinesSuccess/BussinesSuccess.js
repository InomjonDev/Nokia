import React from "react";
import "./BussinesSuccess.css";
import { AiOutlineCloud, AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiUserThin } from "react-icons/pi";

function BussinesSuccess() {
  const Pro = [
    {
      id: "bus-1",
      icon: <AiOutlineCloud />,
      title: "Business-relevant learning solutions",
      desc: "Focused, timely and relevant content on today's hottest technologies including 5G, Internet of Things, Cloud core and much more. From basic to expert levels, NokiaEDU offers learning that fits your needs.",
    },
    {
      id: "bus-2",
      icon: <PiUserThin />,
      title: "Learning delivery",
      desc: "Full spectrum learning offering web-based, instructor-led, virtual instructor-led and blended learning. Cutting-edge delivery methods to match your learning preferences and busy schedules.",
    },
    {
      id: "bus-3",
      icon: <AiOutlineAppstoreAdd />,
      title: "Learning store",
      desc: `The Nokia learning store is a simple and accessible entry point to learning solutions covering Nokia products and technology. Stay up-to-date by exploring our "shop window" of new and trending learning offerings.`,
    },
    {
      id: "bus-4",
      icon: <AiOutlineAppstoreAdd />,
      title: "Nokia learning and development hub",
      desc: "The learning and development hub provides access to the full Nokia learning library and learning communities. Enter here to track, launch and record your learning history.",
    },
  ];
  return (
    <div className="bussinessucces__bg">
      <div className="bussinessuccess container">
        <div className="bussinessuccess__left">
          <div className="bussinessuccess__left-title">
            <h1>Enabling business success</h1>
            <p>
              Our world and the ways we connect and learn are changing faster
              than ever. Now is the time to acquire the skills and competencies
              needed to thrive in today's fast-paced environment. Move your
              business forward with a strategic learning partner, team with
              NokiaEDU.
            </p>
          </div>
          <div className="bussinessuccess__left-card">
            <div className="bussinessuccess__left-card-wrapper">
              {Pro?.map(item => (
                <div className="bussinessuccess__left-item" key={item.id}>
                  <div className="bussinessuccess__left-item-img">
                    {item.icon}
                  </div>
                  <div className="bussinessuccess__left-item-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="bussinessuccess__left-item-desc">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bussinessuccess__right"></div>
      </div>
    </div>
  );
}

export default BussinesSuccess;
