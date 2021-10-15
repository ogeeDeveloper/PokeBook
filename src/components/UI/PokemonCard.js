import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"
import {useStyles} from './PokemonCard.style'

//Notes xs=12(full widt of the screen) sm=2()
const PokemonCard = ({pokemon,image}) => {
    const classes=useStyles()

    return (
        <Grid item xs={12} sm={2}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={image}/>
                {/* CardWrapper */}
                <CardContent className={classes.content}>
                    <Typography>{pokemon.name}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PokemonCard
