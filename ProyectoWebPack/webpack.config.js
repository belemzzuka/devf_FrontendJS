const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [ //Aqui van los loaders de webpack para que pueda transpilar archivos HTML y CSS. AQUI YA HAY DOS REGLAS, UNA PARA HTMLs Y OTRA PARA CSSs
            {
                test: /\.html$/, //REGEX -> Busca todos los archivos que terminan en .html
                use:[
                 {
                    loader: "html-loader", //Traduce HTML para que webpack lo entienda
                    options: { minimize: true }, //Minifica los archivos HTML encontrados
                 },
                ],
                //test: Significa que tengo que buscar
                //use: de lo que encontre, que Loader voy a aplicar
            },
            {
                test: /\.scss$/, //REGEX -> Busca todos los archivos que terminan en .scss (SASS)
                use:[ //El orden de los loader SI importa
                 "style-loader", // Procesa estilos en linea
                 "css-loader", //Procesa estilos en archivos CSS
                 "sass-loader" //Procesa estilos en archivos SCSS (SASS)
                ],
                //test: Significa que tengo que buscar
                //use: de lo que encontre, que Loader voy a aplicar
            },
            {
                test: /\.js$/, //Va a buscar todos los archivos JS en mi proyecto. Este no necesita plugin porque son archivos JS y por defecto los lee el webpack. Es para que convierta a JS vanilla y asegurarnos que TODOS los browsers lo van a entender.
                exclude: /node_modules/, //Omite la carpeta node_modules
                use: {
                    loader: "babel-loader" //carga babel
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/i,
                type: 'asset/resource',
                /*use: [{
                    //loader: "file-loader", //Se puede colocar de manera implicita sin usar la palabra loader 
                    options: {
                        name: '[name].[ext]',
                      },
                }],*/
            },
            {
                test: /\.css$/, //REGEX -> Busca todos los archivos que terminan en .css. O puede ser (sa|sc|c)ss$/, // sass | scss |css
                use:[ //El orden de los loader SI importa
                 "style-loader", // Procesa estilos en linea
                 "css-loader" //Procesa estilos en archivos CSS
                ],
            },
        ],
    },
    plugins: [
        // Aqui se cargan los Plugins de Webpack
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo HTML va a ser el base de mi proyecto en la carpeta src
            filename:"./index.html" // Que único archivo de HTML se va a generar en la carpeta dist
            //El archivo de conf. de webpack simula que se trabaja desde la carpeta dist, por lo que no se necesita especificar.
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css", //Webpack se encargará de generar un nombre del archivo de CSS por nosotros.
            chunkFilename: "[id].css" //Separa el CSS en pedacitos para que dependiendo de la vista solo cargue el CSS necesario. Solo se ejecuta en el caso si hay mucho CSS o es muy grande.
        })
    ],
};
