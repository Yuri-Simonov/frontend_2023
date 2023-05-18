import type { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

// Функция, возвращающая список плагинов вэбпака
export function buildPlugins({
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		// создает HTML-файлы и подключает в него скрипты. За основу берется файл, путь к которому указан в поле "template"
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		// отображает в % прогресс сборки проекта
		new webpack.ProgressPlugin(),
	];
}
