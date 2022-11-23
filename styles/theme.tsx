import { extendTheme } from "@chakra-ui/react"
import {colors} from "../styles/colors"

export const theme = extendTheme ({
    styles: {
        global:{
            'html, body' : {
                color: colors.White,
                background: colors.BlackPrimary
            }
        }
    }
});