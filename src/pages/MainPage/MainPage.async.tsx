import { lazy } from "react";

export const MainPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(
				() =>
					resolve(
						// @ts-ignore
						import(/* webpackChunkName: "main_page" */ "./MainPage")
					),
				1000
			);
		})
);
