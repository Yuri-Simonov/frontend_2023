import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config";

// Loader`ы - правила обработки файлов, выходящих за рамки JS
// Важно помнить, что лоадеры в поле "use" применяются в обратном порядке. То есть, если нужно что-то подключить перед, например, "sass-loader", то подключать нужно в конец набора лоадеров, а не перед sass-loader
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                            saveMissing: true,
                            outputPath: "public/locales/{{locale}}/{{ns}}.json",
                        },
                    ],
                ],
            },
        },
    };

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
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
}
