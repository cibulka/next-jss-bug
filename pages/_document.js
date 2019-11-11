import React from 'react';
import Document, {
    Head, Html, Main, NextScript,
} from 'next/document';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';

export default class JssDocument extends Document {
    static async getInitialProps(ctx) {
        const registry = new SheetsRegistry();
        const generateId = createGenerateId();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => (
                <JssProvider registry={registry} generateId={generateId}>
                    <App {...props} />
                </JssProvider>
            ),
        });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            locale: ctx.query.locale,
            styles: (
                <>
                    {initialProps.styles}
                    <style id="server-side-styles">{registry.toString()}</style>
                </>
            ),
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
