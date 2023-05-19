import type { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

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
		// создает файл CSS для каждого файла JS, для которого требуется CSS
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		})
	];
}
