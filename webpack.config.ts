import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
	// Режим разработки (production или development)
	mode: "development",
	// стартовая точка приложения
	entry: path.resolve(__dirname, "src", "index.ts"),
	// настройки того, куда и как делаться сборка приложения
	output: {
		// Название главного файла сборки. [contenthash] решает проблему кеширования в браузере, добавляя различные символы после основного названия файла (main.00e5d90f89197e3e6887.js)
		filename: "[name].[contenthash].js",
		// Путь, куда будет делаться сборка. В данном случае это папка "build" (или "dist")
		path: path.resolve(__dirname, "build"),
		// чтобы при сборке приложение удалялось все лишнее (неактуальное)
		clean: true,
	},
	// Подключаемые плагины
	plugins: [
		// создает HTML-файлы и подключает в него скрипты. За основу берется файл, путь к которому указанн в поле "template"
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		// отображает в % прогресс сборки проекта
		new webpack.ProgressPlugin(),
	],
	module: {
		// правила обработки файлов, выходящих за рамки JS
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	// расширения файлов, у которых при импорте оно не будет указываться
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};

export default config;
