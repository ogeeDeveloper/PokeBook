import {AppBar, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'react-router-dom'

//Create a stylesheet using Material UI makeStyle Libray
const useStyles = makeStyles(theme=>({
    AppBar: {
        backgroundColor: 'blue'
    },
    link: {
        textDecoration: 'none'
    },
    title:{
        color: 'white',
        cursor: 'pointer'
    }

}))

const NavigationBar = () => {
    //iitialie the stling from the useStyles
    const classes = useStyles()

    return (
        <div>
            <AppBar className={classes.AppBar} position="fixed" variant="h6">
                <Link to="/" className={classes.link}>
                    {/* Typograp for stlyling the text in the links */}
                    <Typography className={classes.title}>PokeInfo</Typography>
                </Link>
            </AppBar>
        </div>
    )
}

export default NavigationBar
