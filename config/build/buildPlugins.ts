import type { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Функция, возвращающая список плагинов вэбпака
export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
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
        }),
        // позволяет прокидывать глобальные переменные в само приложение
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
    ];

    if (isDev) {
        // обновления без перезагрузки страницы
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }

    return plugins;
}
