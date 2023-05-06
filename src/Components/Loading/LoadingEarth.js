import React from "react";
import earth from "./earth";

const EarthLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: earth,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export default EarthLottieOptions