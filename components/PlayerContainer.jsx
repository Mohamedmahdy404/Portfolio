import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import dynamic from "next/dynamic";
import useDeferredCanvas from "@/utils/useDeferredCanvas";
const PlayerCanvas = dynamic(() => import("./canvas/Player"), { ssr: false });

function PlayerContainer({ isMobile }) {
  const canvas = useDeferredCanvas();
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
      ref={canvas.ref}
    >
      {canvas.ready && <PlayerCanvas isMobile={isMobile} active={canvas.visible} />}
    </motion.div>
  );
}

export default PlayerContainer;
