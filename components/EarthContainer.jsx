import { motion } from "framer-motion";

import { slideIn } from "@/utils/motion";
import dynamic from "next/dynamic";
import useDeferredCanvas from "@/utils/useDeferredCanvas";
const EarthCanvas = dynamic(() => import("./canvas/Earth"), { ssr: false });

function EarthContainer({ isMobile }) {
	const canvas = useDeferredCanvas();
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full md:w-2/3 md:h-auto h-[550px]"
			ref={canvas.ref}
		>
			{canvas.ready && <EarthCanvas isMobile={isMobile} active={canvas.visible} />}
		</motion.div>
	);
}

export default EarthContainer;
