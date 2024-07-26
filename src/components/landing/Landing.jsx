import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen sm:gap-8 ">
      <img
        src="/BackgroundOldPapper.jpg"
        alt=""
        className="hidden opacity-80 lg:flex fixed w-screen h-auto mt-[-150px] z-0"
      />
      <img
        src="/BackgroundOldPapper.png"
        alt=""
        className="opacity-80 sm:hidden fixed w-auto h-screen z-0"
      />

      <div className="top-0 pt-4 flex flex-col items-center w-full gap-12 sm:gap-8 z-10 overflow-hidden shrink-0">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-[#6E4618] mt-4 sm:mt-0 text-[3.3rem] sm:text-9xl z-10"
        >
          El Árbol de la Libertad
        </motion.h1>
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            type: "spring",
            delay: 0.2,
          }}
          className="text-[#5E3608] mt-[-1.5rem] text-[1.2rem] sm:text-2xl sm:mt-[-1rem] z-10"
        >
          Sumergite en la verídica y conmovedora travesía de Alois y Magdalena,
          <br /> un amor que hizo historia.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5,
          delay: 0.8,
          type: "spring",
          ease: "easeInOut",
        }}
        className="flex w-[90vw] h-[200px] mt-16 sm:w-[50vw] sm:h-[50vh] sm:mt-12 z-10 rounded-3xl overflow-hidden shrink-0"
      >
        <ReactPlayer
          url="https://youtu.be/tgMrvOuU88g"
          controls
          width="100%"
          height="auto"
        />
      </motion.div>

      <div className="flex w-full justify-center mt-8 sm:mt-4 gap-16 z-10">
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 3,
            delay: 1.2,
            type: "spring",
            ease: "easeInOut",
          }}
          className="hidden p-4 text-2xl  sm:w-[15%] sm:h-[5rem]  sm:text-2xl bg-[#6E4618] z-20 rounded-[5rem] shrink-0"
        >
          Descargar Video
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 3,
            delay: 1.2,
            type: "spring",
            ease: "easeInOut",
          }}
          className="text-2xl mt-12 sm:w-[15%] sm:h-[5rem] sm:mt-4 sm:text-2xl bg-[#7E5628] z-20 rounded-[5rem] shrink-0"
        >
          <a
            href="https://api.whatsapp.com/send?text=https%3A%2F%2Ftupagina.com"
            target="_blank"
            className="p-4 px-8 text-2xl mt-12 sm:w-[15%] sm:h-[5rem] sm:mt-4 sm:text-2xl bg-[#7E5628] z-20 rounded-[5rem] shrink-0"
          >
            Compartir
          </a>
        </motion.button>
      </div>
      <img
        src="/arrow-down.svg"
        alt=""
        className="animate-bounce w-16 mt-16 sm:mt-10 sm:w-16 z-10"
      />

      {/** DIV CONTENEDOR DE CREDITOS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex flex-col  w-[100%] mt-16 sm:w-[62vw] backdrop-blur-sm sm:mt-24 shrink-0 rounded-t-[4rem] sm:rounded-[3rem] p-8 gap-12 z-10"
      >
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-5xl sm:text-8xl"
        >
          Idea, Libreto, Dirección y Producción:
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-3xl sm:text-4xl"
        >
          roberto massi
        </motion.p>
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-12 text-6xl sm:text-8xl"
        >
          Actores:
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Alois Tabernig - Jose Pero
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Magdalena Moritz - Ana Weidmann
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Sacerdote - Lucas Brega
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Juiglar - Maximiliano Rodriguez
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Madre de Magdalena - Lucia Morandin
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Padrastro Magdalena - Santiago Antonioli
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Alma de Alois - César Spais
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Alma de Magdalena - Liliana Monai
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Otto , amigo de Alois
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Lucia Weltimann Cazador
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Franco Van de Velde{" "}
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Cantinera - Marianela Quiroz
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Hijas de Alois - Magdalena Grazioli Y Juana Borgogno
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Pastor protestante: Gustavo frei
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >
          Colonos de Esreranza: miembros Asociación Alemana de Esperanza
        </motion.p>
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="sm:mt-12 text-6xl sm:text-8xl"
        >
          Música:
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >{`Banda Municipal - Cuarteto de cuerdas "De la cabeza"`}</motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >{`Música original de la obra "ROMANCE DEL CEDRO AZUL"`}</motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-[1.2rem] lg:text-3xl"
        >{`LETRA Y MÚSICA : cesar spais`}</motion.p>
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-12 text-5xl text-[#4E2600]"
        >
          Filmación ad honorem por{" "}
          <span className="text-6xl">Nestor Estrubia</span>{" "}
        </motion.h1>
      </motion.div>
    </div>
  );
}
