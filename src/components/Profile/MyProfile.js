import React from "react";
import "./MyProfileStyles.css";
import foto from "../../assets/rapunzel.jpg";
export default function MyProfile() {
    return (
        <div className="myprofile">
            <div className="profile-parent">
                <div className="profile-details">
                    <h1>Alya Zahra Fatikha</h1>
                    <p>Mahasiswa Teknik Komputer Universitas Diponegoro Semarang.</p>
                    <a href="http://instagram.com/alyazahraf">
                        Hubungi Saya
                    </a>
                </div>
            </div>
            
            <div className="profile-picture">
                    <img src={foto} alt="" className="image-alya"/>
            </div>
        </div>

    )
}


