import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Data from '../../data/JsonData';
import { useState } from 'react'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Box component={"div"}>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const PropertyType = () => {
    const [value, setValue] = useState(0);
    const [resCheck, setResCheck] = useState();
    const [commCheck, setCommCheck] = useState();
    // console.log(resCheck)
    // console.log(CommCheck)

    const [age, setAge] = React.useState('');

    const selectChange = (event) => {
        setAge(event.target.value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box>
                <Box>
                    <Typography sx={{ fontSize: "20px", }}>Property Type</Typography>
                </Box>
                <Box sx={{ mt: 0.5 }}>
                    <Typography sx={{ fontSize: 15, color: "grey" }}>Enter some information about property type</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', mt: 3 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab label="Residential" />
                    <Tab label="Commercial" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Box>
                        <Box sx={{ mt: 2 }}>
                            <Grid container spacing={3}>

                                {
                                    Data.Residential.map((proty, index) => (
                                        <Grid key={index} item xs={12} md={2}>
                                            <Box sx={{ transition: "0.4s", border: resCheck === index ? "2px solid #8162d8" : "2px solid transparent", boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px", cursor: "pointer", borderRadius: "6px", height: "100%", minHeight: "125px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                                                onClick={() => {
                                                    setResCheck(index)
                                                }}
                                            >
                                                <Box sx={{ py: 2, px: 1.5 }}>
                                                    <Box sx={{ textAlign: "center" }}>
                                                        <HomeWorkOutlinedIcon sx={{ fontSize: "35px", color: resCheck === index ? "#8162d8" : "grey" }} />
                                                    </Box>
                                                    <Box sx={{ textAlign: "center", mt: 1 }}>
                                                        <Typography sx={{ fontSize: 14, color: resCheck === index ? "#8162d8" : "grey" }}>{proty.name}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ mt: 2 }}>
                        <Grid container spacing={3}>

                            {
                                Data.Commercial.map((commer, index) => (
                                    <Grid key={index} item xs={12} md={2}>
                                        <Box sx={{ transition: "0.4s", border: commCheck === index ? "2px solid #8162d8" : "2px solid transparent", boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px", cursor: "pointer", borderRadius: "6px", height: "100%", minHeight: "125px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                                            onClick={() => {
                                                setCommCheck(index)
                                            }}
                                        >
                                            <Box sx={{ py: 2, px: 1.5 }}>
                                                <Box sx={{ textAlign: "center" }}>
                                                    <HomeWorkOutlinedIcon sx={{ fontSize: "35px", color: commCheck === index ? "#8162d8" : "grey" }} />
                                                </Box>
                                                <Box sx={{ textAlign: "center", mt: 1 }}>
                                                    <Typography sx={{ fontSize: 14, color: commCheck === index ? "#8162d8" : "grey" }}>{commer.name}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </TabPanel>
            </Box >

            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">List Property For</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="List Property For"
                                    onChange={selectChange}
                                >
                                    <MenuItem value={10}>For sale </MenuItem>
                                    <MenuItem value={20}>For rent or lease</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default PropertyType