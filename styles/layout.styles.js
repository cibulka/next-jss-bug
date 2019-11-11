import { createUseStyles } from 'react-jss';

const getMediaQuery = (theme, name, rule) => {
    const key = theme[name];
    return {
        [key]: rule,
    };
};

const styles = theme => ({
    main: props => ({
        background: 'red',
        ...getMediaQuery(theme, 'bigMinWidth', {
            background: 'blue',
        }),
        ...getMediaQuery(theme, 'bigMaxWidth', {
            background: 'green',
        }),
    }),
    // Everything from here is purely presentational
    body: {
        padding: '2em 0',
    },
    nav: {
        display: 'flex',
        borderBottom: 'solid 1px',
        marginBottom: '1em',
        '& li': {
            listStyleType: 'none',
            margin: '0 2em 1em 0',
            padding: 0,
        }
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2em',
        marginBottom: '2em',
    },
});

export default createUseStyles(styles);
