import {AppBar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './NavigationBar.style'


const NavigationBar = () => {
    //iitialie the stling from the useStyles
    const classes = useStyles()

    return (
        <div>
            <AppBar className={classes.AppBar} position="fixed" variant="h6">
                <Link to="/" className={classes.link}>
                    {/* Typography for stlyling the text in the links */}
                    <Typography className={classes.title}>PokeInfo</Typography>
                </Link>
            </AppBar>
        </div>
    )
}

export default NavigationBar
