import React from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import { ThemeProvider } from 'react-jss';

const THEME = {
    bigMinWidth: '@media (min-width: 1200px)',
    bigMaxWidth: '@media (max-width: 1200px)',
};

class MyApp extends App {
    componentDidMount() {
        const style = document.getElementById('server-side-styles');

        if (style) {
            style.parentNode.removeChild(style);
        }
    }

    render() {
        const { Component } = this.props;

        return (
            <ThemeProvider theme={THEME}>
                <Component
                    {...this.props.pageProps}
                    statusCode={this.props.statusCode}
                />
            </ThemeProvider>
        );
    }
}

export default MyApp;
