import Document, { Html, Head, Main, NextScript } from 'next/document';

//SUBSTITUI O public/index.html onde as fontes foram instaladas no projeto com create react-app
//Aqui estão configurações que são compartilhadas em todas as rotas da aplicação, ou seja informações estáticas
//O arquivo _document é processado apenas uma vez quando o usuário acessa a aplicação

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}