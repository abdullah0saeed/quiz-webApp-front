import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LazyLottie() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets4.lottiefiles.com/packages/lf20_sxCwLo.json",
    });

    // Cleanup function
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
