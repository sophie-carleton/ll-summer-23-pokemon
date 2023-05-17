import React from "react";
import HeroShot from "../components/hero-shot";
import ShootName from "../components/shoot-name";
import "../styles/my-shoot-report.css"; // Import the external CSS file

const MyShootReportPage = () => {
  return (
    <div className="background-image">
      <div className="shoot-info-container">
        <h1 className="large-heading">_photo-video-base-23.1</h1>
        <div className="centered-content">
          <div className="content-item centered-item">
            <HeroShot />
          </div>
          <div className="content-item centered-item">
            <ShootName>20230512.99.1502_LL.Show.AllDay</ShootName>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShootReportPage;
