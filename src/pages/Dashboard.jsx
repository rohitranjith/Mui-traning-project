import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Data from '../data/JsonData'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(name, role, calories, fat, carbs) {
    return { name, role, calories, fat, carbs };
}

const rows = [
    createData("Sunil Joshi", "Web Designer", "Elite Admin", "Low", "$3.9K"),
    createData("John Deo", "Web Developer", "Flexy Admin", "Medium", "$24.9K"),
    createData("Nirav Joshi", "Web Manager", "Material Pro", "High", "$12.8K"),
    createData("Yuvraj Sheth", "Project Manager", "Xtreme Admin", "Very High", "$2.4K"),
];



const Dashboard = () => {

    return (
        <>
            <Container maxWidth="lg">

                {/* Dashboard Card */}

                <Grid container spacing={2} sx={{ mt: 6 }}>
                    {
                        Data.CardData.map((card, value) => (
                            <Grid key={value} item xs={12} lg={2}>
                                <Box sx={{ background: `${card.bgcolor}`, p: 2, borderRadius: "7px" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <img src={card.imgpath} alt="" />
                                    </Box>
                                    <Box sx={{ mt: 0.5, textAlign: "center" }}>
                                        <Typography sx={{ color: `${card.color}`, fontSize: "16px", fontWeight: "500" }}>{card.title}</Typography>
                                    </Box>
                                    <Box sx={{ mt: 0.5, textAlign: "center" }}>
                                        <Typography sx={{ color: `${card.color}`, fontSize: "22px", fontWeight: "500" }}>{card.count}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>

                {/* Dashboard Card End */}


                {/* Project Table Start */}

                <TableContainer component={Paper} sx={{ mt: 7, p: 3, width: "initial", boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" }}>
                    <Box>
                        <Typography sx={{ fontSize: "20px", fontWeight: "500", }}>Top Projects</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "15px" }}>Best Products</Typography>
                    </Box>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Assigned</TableCell>
                                <TableCell>Project</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Budget</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Box sx={{ width: "40px", height: "40px", }}>
                                                <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" alt="" />
                                            </Box>
                                            <Box sx={{ ml: 2 }}>
                                                <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>{row.name}</Typography>
                                                <Typography sx={{ fontSize: "14px" }}>{row.role}</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{row.calories}</TableCell>
                                    <TableCell>{row.fat}</TableCell>
                                    <TableCell>{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Project Table End */}
            </Container>
        </>
    )
}

export default Dashboard