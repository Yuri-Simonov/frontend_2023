import webpack from "webpack";

// правила обработки файлов, выходящих за рамки JS
export function buildLoaders(): webpack.RuleSetRule[] {
	// Если не используется TS, нужен "babel-loader" для преобразования нового стандарта JS в старый, понятный многим браузерам
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	return [typescriptLoader, scssLoader];
}
