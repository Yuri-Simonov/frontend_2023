import { lazy } from "react";

export const AboutPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(
				() =>
					resolve(
						// @ts-ignore
						import(
							/* webpackChunkName: "about_page" */ "./AboutPage"
						)
					),
				1000
			);
		})
);
