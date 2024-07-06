import { makeStyles } from "zitics-core-ui";

export const useStyles = makeStyles({
    root: {
        fontSize: "20px",
        fontFamily: "Lato",
        textAlign: "center",
    },
    textBtn: {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right, yellow 20%, lightpink 40%, pink 60%, violet 80%)',
    backgroundSize: '200% auto',
    color: '#000',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animationName: {
      to: {
        backgroundPosition: '200% center',
      },
    },
    animationDuration: '1s',
    animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        ': hover': {
        backgroundColor:"white",
    },
    },
});