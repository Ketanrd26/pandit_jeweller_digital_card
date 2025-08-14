import React, { useRef, useState } from "react";
import "./App.scss";
import { FaInstagram } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import logo from "./assets/logo.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { QRCode } from "antd";

function App() {
  const saveContact = () => {
    // vCard content
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Wave solutions
ORG:Pandit Jewellers
TITLE:Pandit Jewellers
TEL:+919529540766
URL:https://g.page/r/CQAAANDyQUwwEAI/review
END:VCARD`;

    // Create a Blob for the vCard file
    const blob = new Blob([vCardData], { type: "text/vcard" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pandit_jewellers.vcf"; // vCard file name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

  const qrRef = useRef(null);

  // const downloadQR = () => {
  //   const canvas = qrRef.current.querySelector("canvas");
  //   if (canvas) {
  //     const url = canvas.toDataURL("image/png");
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "qrcode.png";
  //     a.click();
  //   }
  // };

  return (
    <>
      <div class="crad_parent">
        <div class="card">
          <div class="topsection">
            <div class="span">
              <img src={logo} alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="social-icons">
              <a
                href="https://www.instagram.com/s.r.pandit_jewellers/"
                target="blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1FBwMxQHgE/"
                target="blank"
              >
                <FiFacebook />
              </a>
            </div>
            <div class="content">
              <a class="box" href="https://g.page/r/CQAAANDyQUwwEAI/review">
                <span>
                  {" "}
                  <GoGlobe />
                </span>
                <a style={{ fontSize: "16px" }}>Explore Goggle</a>
              </a>
              <a class="box" href="https://maps.app.goo.gl/TrFmj7tWrtSQcTgh7">
                <span>
                  {" "}
                  <MdOutlineLocationOn />
                </span>
                <a style={{ fontSize: "16px" }}>
                  Ganj Peth, Pune, Maharashtra 411042
                </a>
              </a>

              <a class="box" href="tel:+971 50 806 0418">
                <span>
                  {" "}
                  <FiPhone />
                </span>
                <a style={{ fontSize: "16px" }}>+91 9529540766</a>
              </a>
            </div>
            <div className="btn" onClick={saveContact}>
              Save Contact
            </div>
          </div>
        </div>

        {/* <div class="qr" ref={qrRef}>
          <QRCode
            errorLevel="H"
            value="https://pandit-jeweller-digital-card.vercel.app/"
            icon={logo}
            size={200}
          />
        </div>
        <button onClick={downloadQR}>Download QR</button> */}
      </div>
    </>
  );
}

export default App;
