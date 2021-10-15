import { makeStyles } from "@material-ui/core/styles"

//Create a stylesheet using Material UI makeStyle Libray
export const useStyles = makeStyles(theme=>({
    AppBar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title:{
        color: 'white',
        cursor: 'pointer'
    }

}))