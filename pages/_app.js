import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import PreLoader from "@/components/PreLoader";
import { LanguageProvider } from "@/contexts/LanguageContext";

const GA_MEASUREMENT_ID =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XV0FQ3FX9T";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		// Reveal the hydrated page before starting expensive WebGL work.
		let secondFrame;
		const firstFrame = requestAnimationFrame(() => {
			secondFrame = requestAnimationFrame(() => setLoading(false));
		});
		return () => {
			cancelAnimationFrame(firstFrame);
			cancelAnimationFrame(secondFrame);
		};
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	useEffect(() => {
		const trackPageView = (url) => {
			sendGAEvent("event", "page_view", {
				page_path: url,
				page_location: `${window.location.origin}${url}`,
				page_title: document.title,
			});
		};

		router.events.on("routeChangeComplete", trackPageView);
		return () => router.events.off("routeChangeComplete", trackPageView);
	}, [router.events]);

	const title = "Portfolio | Mohamed Yasser Mahdy";
	const description =
		"Mohamed Yasser Mahdy — Software Engineer specializing in full-stack .NET development (ASP.NET, Angular).";
	const avatar = "public/assets/avatar-meta.svg";
	const url = "";

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image" content={avatar} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={avatar} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@mohamedmahdy9" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<link rel="canonical" href={url} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/assets/icons/favicon/site.webmanifest"
				/>
			</Head>

			<LanguageProvider>
				<Component {...pageProps} loading={loading} />
				<Analytics />
				<GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
				{loading && <PreLoader />}
			</LanguageProvider>
		</>
	);
}
