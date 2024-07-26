import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen ">
      <img
        src="/BackgroundOldPapper.jpg"
        alt=""
        className="hidden opacity-50 lg:flex fixed w-screen h-auto z-0"
      />

      <div className="top-0 pt-4 flex flex-col w-full gap-8 z-10 overflow-hidden">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-yellow-700 text-9xl z-10"
        >
          El Árbol de la Libertad
        </motion.h1>
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            type: "spring",
            delay: 0.6,
          }}
          className="text-yellow-800 mt-[-1rem] z-10"
        >
          Sumergite en la verídica y conmovedora travesía de Alois y Magdalena,
          <br /> un amor que hizo historia.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1.6, scale: 1 }}
        transition={{
          duration: 1.6,
          delay: 0.8,
          type: "spring",
          ease: "easeInOut",
        }}
        className="flex  w-[50vw] h-[55vh] mt-8 z-10 rounded-3xl overflow-hidden shrink-0"
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls
          width="100%"
          height="auto"
        />
      </motion.div>

      <motion.button
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.8,
          type: "spring",
          ease: "easeInOut",
        }}
        className="w-[15%] h-[5rem] mt-8 text-2xl bg-yellow-600 z-20 rounded-[5rem] shrink-0"
      >
        Descargar Video
      </motion.button>
    </div>
  );
}
