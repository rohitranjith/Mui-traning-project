import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const DialogBox = ({ open, onClose, children }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: '40%',
        maxWidth: '40%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 4,
        borderRadius: 3,
        p: 4,
        outline: "none",
        maxHeight: "88vh",
        overflow: 'hidden',
    };
    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </>
    )
}

export default DialogBox