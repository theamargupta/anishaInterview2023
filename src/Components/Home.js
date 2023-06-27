import React from "react";
import "./Home.css";
import image from "../Images/2889676.png";

export const Home = () => {
  return (
    <>
      <div class="main-container">
      <div class="second-container ">
        <div class="box-1"> <img src={image} alt="Lock" /></div>
        <div class="box">
        <div class="inner-container">
          <div class="inner-box">Sheet</div>
          <div class="inner-box">X</div>
        </div>
        </div>
      </div>
        <div class="container">
          <img src={image} alt="Lock" />
          <div class="text-container">
            <h3>Data Sync</h3>
            <p>There is only one line in this para</p>
          </div>
        </div>
        <div class="container">
          <img src={image} alt="Lock" />
          <div class="text-container">
            <h3>Rest Hook</h3>
            <p>There is only one line in this para</p>
          </div>
        </div>
        <div class="container">
          <img src={image} alt="Lock" />
          <div class="text-container">
            <h3>Workflow Automation</h3>
            <p>There is only one line in this para</p>
          </div>
        </div>
        <div class="container">
          <img src={image} alt="Lock" />
          <div class="text-container">
            <h3>Webhook</h3>
            <p>There is only one line in this para</p>
          </div>
        </div>
        <div class="container">
          <img src={image} alt="Lock" />
          <div class="text-container">
            <h3>Sheet Talk</h3>
            <p>There is only one line in this para</p>
          </div>
        </div>
      </div>
     

    </>
  );
};
