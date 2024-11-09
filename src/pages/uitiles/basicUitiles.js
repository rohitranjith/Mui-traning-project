
import { enqueueSnackbar } from 'notistack'


export const alertMsg = (message, variant = 'default', options = {}) => {
    enqueueSnackbar(message, {
        autoHideDuration: 3000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
        variant: variant,
        ...options
    })
}