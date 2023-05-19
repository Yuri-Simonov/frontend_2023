import webpack from "webpack";
import type { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		// Режим разработки (production или development)
		mode: mode,
		// стартовая точка приложения
		entry: paths.entry,
		// настройки того, куда и как делаться сборка приложения
		output: {
			// Название главного файла сборки. По умолчанию это имя будет "main". [contenthash] решает проблему кеширования в браузере, добавляя различные символы после основного названия файла (main.00e5d90f89197e3e6887.js)
			filename: "[name].[contenthash].js",
			// Путь, куда будет делаться сборка. В данном случае это папка "build" (или "dist")
			path: paths.build,
			// чтобы при сборке приложение удалялось все лишнее (неактуальное)
			clean: true,
		},
		// Подключаемые плагины
		plugins: buildPlugins(options),
		module: {
			// правила обработки файлов, выходящих за рамки JS
			rules: buildLoaders(options),
		},
		// расширения файлов, у которых при импорте оно не будет указываться
		resolve: buildResolvers(),
		// Для отслеживания ошибок при разработке (при использовании webpack-dev-server)
		devtool: isDev ? "inline-source-map" : undefined,
		// Настройки самого dev-server
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
