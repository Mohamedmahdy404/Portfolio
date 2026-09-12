import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className=" flex justify-center items-center w-full h-full flex-col z-30"
		>
			<span className="canvas-loader z-30 text-white"></span>
			<p className="text-[14px] text-white font-bold mt-10 z-30">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
}

export default CanvasLoader;
