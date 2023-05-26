import type { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		// порт, на котором будет открываться приложение
		port: options.port,
		// автоматическое открытие вкладки при запуске команды "npm start"
		open: true,
		// проксирование запросов через корневую страницу (чтобы на дочерних страницах, при перезагрузке не падало приложение с ошибкой при использовании SPA)
		historyApiFallback: true,
		// обновления без перезагрузки страницы
		hot: true,
	};
}
