import React from "react";


    function DocumentDetail({ document }) {
        return (
            <div className="Home-content">
                <div className="Home-profile">
                    <img src={document.file} className="Profile-image" alt="Profile image"/>
                </div>
            </div>


        );
    }

export default DocumentDetail;
