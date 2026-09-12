export default function PreLoader() {
  return (
    <div role="status" aria-label="Loading" className="w-[100svw] h-[100svh] overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-8">
      <div className="loader md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
        <div className="loader_cube loader_cube--color"></div>
        <div className="loader_cube loader_cube--glowing"></div>
        <span className="loader-span"></span>
      </div>
    </div>
  );
}
