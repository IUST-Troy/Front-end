import React from "react";

const Dashboard = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 gap-6">
            <div className="grid grid-cols-custom_2_3 gap-4">
                <div className="card-bg border border-pallate-persian_green rounded-2xl"></div>
                <div className="card-bg border border-pallate-persian_green rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-custom_3_1 gap-4">
                <div className="card-bg border border-pallate-persian_green rounded-2xl"></div>
                <div className="card-bg border border-pallate-persian_green rounded-2xl"></div>
            </div>
        </div>
    );
};

export default Dashboard;
