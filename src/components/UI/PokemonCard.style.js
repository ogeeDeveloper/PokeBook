import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme=>({
    cardMedia: {
        margin: "auto",
        width: 150,
        height: 150
    },
    card: {
        cursor: "pointer"
    },
    cardContent: {
        textAlign: "center"
    }
}))