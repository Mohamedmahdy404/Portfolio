import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants";
import ThemeButton from "./ThemeButton";
import Menu from "./../public/assets/icons/menu.svg";
import Close from "./../public/assets/icons/close.svg";
import { slideIn } from "@/utils/motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Navbar() {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [avatarToggle, setAvatarToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { t, isArabic, toggleLanguage } = useLanguage();

	useEffect(() => {
		if (avatarToggle) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [avatarToggle]);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const sections = navLinks
			.map((nav) => document.getElementById(nav.id))
			.filter(Boolean);

		if (sections.length === 0) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible && visible.target && visible.target.id) {
					setActive(visible.target.id);
				}
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	function AvatarModal() {
		return (
			<aside className="w-[100svw] h-[100svh] flex justify-center items-center bg-[#0000007a] fixed top-0 left-0">
				<div className="sm:w-[500px] sm:h-[500px] xs:w-[400px] xs:h-[400px] w-[200px] h-[200px] dark:bg-[#2b2b42d2] bg-[#e0eaf0] flex justify-center items-center backdrop-blur-sm backdrop-filter bg-opacity-80 rounded-md modal">
					<div className="relative w-[80%] h-[80%] rounded-md">
						<Image
							src="/assets/avatar.png"
							alt={t.nav.avatarAlt}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							className="w-9 h-9 object-cover rounded-md"
						/>
						<button
							type="button"
							aria-label={t.nav.closePhoto}
							className={`w-[28px] h-[28px] object-contain text-ctnPrimaryLight dark:text-ctnPrimaryDark flex justify-center items-center cursor-pointer absolute top-[-30px] ${isArabic ? "left-[-30px]" : "right-[-30px]"}`}
							onClick={() => setAvatarToggle(!avatarToggle)}
						>
							<Close className="w-5 h-5" />
						</button>
					</div>
				</div>
			</aside>
		);
	}

	return (
		<>
			<nav
				className={`paddingX w-full flex items-center py-4 md:py-5 fixed top-0 z-30 transition-all duration-300 ${
					scrolled
						? "backdrop-filter backdrop-blur-xl bg-bgPrimaryLight/80 dark:bg-bgPrimaryDark/80 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
						: "bg-transparent backdrop-filter backdrop-blur-xl bg-opacity-60"
				}`}
			>
				{avatarToggle && <AvatarModal />}
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<div href="/" className="flex items-center gap-3 sm:gap-6">
						<div
							className="w-9 h-9 object-contain
                        rounded-full relative cursor-pointer"
						>
							<Image
								src="/assets/avatar.png"
								alt={t.nav.avatarAlt}
								fill={true}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
								className="w-9 h-9 object-cover
                        rounded-full"
								onClick={() => setAvatarToggle(!avatarToggle)}
							/>
							<button
								type="button"
								className="absolute inset-0 rounded-full"
								aria-label={t.nav.openPhoto}
								onClick={() => setAvatarToggle(!avatarToggle)}
							/>
						</div>
						<Link href="/">
							<p className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[15px] xs:text-[16px] sm:text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
								{t.nav.name} &nbsp;
								<span className="lg:block hidden"> | {t.nav.role}</span>
							</p>
						</Link>
					</div>

					<ul className="list-none hidden md:flex flex-row gap-10 items-center">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`relative pb-1 dark:text-ctnPrimaryDark text-ctnPrimaryLight transition-colors duration-200 ease-in text-[18px] font-medium cursor-pointer ${
									active === nav.id
										? "text-quaternary dark:text-quaternary"
										: "hover:text-tertiary hover:dark:text-tertiary"
								}`}
								onClick={() => setActive(nav.id)}
							>
								<a href={`#${nav.id}`}>{t.nav.links[index]}</a>
								{active === nav.id && (
									<motion.span
										layoutId="nav-underline"
										className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-quaternary"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
							</li>
						))}
						<li>
							<button
								type="button"
								onClick={toggleLanguage}
								aria-label={t.nav.languageLabel}
								className="min-w-[44px] h-9 px-3 rounded-full border border-primary/70 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors"
							>
								{t.nav.languageShort}
							</button>
						</li>
						<li
							className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<ThemeButton />
						</li>
					</ul>

					<div className="md:hidden flex flex-1 justify-end items-center">
						<button
							type="button"
							aria-label={toggle ? t.nav.closeMenu : t.nav.openMenu}
							className="w-[28px] h-[28px] object-contain text-ctnPrimaryLight dark:text-ctnPrimaryDark flex justify-center items-center cursor-pointer relative z-10"
							onClick={() => setToggle(!toggle)}
						>
							{toggle ? (
								<Close className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>

						{toggle && (
							<div
								className="fixed inset-0 z-[5] bg-black/40 backdrop-blur-[2px] md:hidden"
								onClick={() => setToggle(false)}
								aria-hidden="true"
							/>
						)}

						<motion.div
							variants={slideIn(isArabic ? "left" : "right", "tween", 0, 0.3)}
							initial="hidden"
							whileInView="show"
							className={`${
								!toggle ? "hidden" : "flex"
								} p-6 bg-bgSecondaryLight dark:bg-bgSecondaryDark absolute top-20 ${isArabic ? "left-0" : "right-0"} mx-4 my-2 min-w-[170px] z-10 rounded-xl shadow-2xl`}
						>
							<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
								{navLinks.map((nav, index) => (
									<li
										key={nav.id}
										className={`font-poppins font-medium cursor-pointer text-[16px] ${
											active === nav.id
												? "text-secondary"
												: "dark:text-ctnPrimaryDark text-ctnPrimaryLight"
										}`}
										onClick={() => {
											setToggle(!toggle);
										setActive(nav.id);
										}}
									>
									<a href={`#${nav.id}`}>{t.nav.links[index]}</a>
								</li>
							))}
							<li>
								<button
									type="button"
									onClick={toggleLanguage}
									aria-label={t.nav.languageLabel}
									className="min-w-[44px] h-9 px-3 rounded-full border border-primary/70 text-sm font-bold text-primary"
								>
									{t.nav.languageShort}
								</button>
							</li>
								<li
									className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
								>
									<ThemeButton />
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
