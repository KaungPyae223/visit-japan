import { AnimatePresence, motion } from "framer-motion";
import { useRouteStore } from "./store/RouteStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AnimatePannel = () => {
  const { route } = useRouteStore();

  const [animate, setAnimate] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      navigate(route);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, 500);

    return () => clearTimeout(timer);
  }, [route]);

  return (
    <AnimatePresence mode="wait">
      {animate && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%", transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: "100%", transition: { duration: 0.5 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-20 flex items-center justify-center bg-white shadow-xl p-6"
        >
          <div className="text-center space-y-4">
            <p className="text-4xl font-semibold text-gray-800">Visit Japan</p>
            <p className="text-4xl font-semibold text-gray-600">訪問日本</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatePannel;
