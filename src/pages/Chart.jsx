import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Chart from "react-apexcharts";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const ChartDesign = () => {

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            }
        },
        series: [
            {
                name: "series-1",
                data: [0, '50k', '100k', '150k', '200k', '250k', '300k']
            }
        ]
    }

    const donut = {
        options: {
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '12px',
                                color: "#000",
                                offsetY: 20,

                            },
                            value: {
                                show: true,
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: "#555",
                                offsetY: -15,
                                formatter: function (val) {
                                    return val
                                }
                            },
                        }
                    },
                },
            },
        },
        series: [45, 45, 10],
        labels: ['A', 'B', 'C',],
    }
    return (
        <Container maxWidth="lg" sx={{ mt: 2 }} >
            <Box>
                <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
                    <Grid item sx={{ display: "flex" }} xs={12} md={6}>
                        <Box sx={{ boxShadow: "2px 2px 12px 0px rgb(0 0 0 / 11%)", p: 3, width: "100%" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>Job Analytics</Typography>
                                </Box>
                                <Box sx={{ width: "35px", height: "35px", background: '#f3f3f3', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
                                    <FilterAltOutlinedIcon sx={{ color: "#707070" }} />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Chart options={donut.options} series={donut.series} type="donut" width="100%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={{ display: "flex" }} xs={12} md={6}>
                        <Box sx={{ boxShadow: "2px 2px 12px 0px rgb(0 0 0 / 11%)", p: 3, width: "100%" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>Job Analytics</Typography>
                                </Box>
                                <Box sx={{ width: "35px", height: "35px", background: '#f3f3f3', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
                                    <FilterAltOutlinedIcon sx={{ color: "#707070" }} />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    width="100%"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default ChartDesign