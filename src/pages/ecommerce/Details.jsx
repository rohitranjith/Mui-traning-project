import { Box, Breadcrumbs, Button, Checkbox, Chip, Container, Grid, Rating, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Reviews from './Reviews';


function CustomTabPanel(props) {
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Details = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>Product Detail</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Shop </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Details </Typography>
                                    </Breadcrumbs>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ width: "165px", height: "165px", position: "absolute", right: "20px", top: "0" }}>
                                    <img style={{ width: "100%", height: "100%" }} src="https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fbreadcrumb%2FChatBc.png&w=256&q=75" alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Box sx={{ border: "1px solid #e5eaef", p: 3, borderRadius: "7px" }}>
                        <Grid container spacing={3} sx={{ alignItems: "center" }}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ width: '100%', height: '550px', borderRadius: "7px", overflow: "hidden" }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/products/s4.jpg" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Box>
                                        <Chip size="small" label="In Stock" color="primary" />
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography sx={{ fontSize: 14 }}>Books</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 22, fontWeight: 500 }}>How Innovation Works</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 14, mt: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum felis.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 20, fontWeight: 500, textDecoration: "line-through" }}>$350</Typography>
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography sx={{ fontSize: 24, fontWeight: 500, }}>$275</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <Box>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography sx={{ fontSize: 14 }}>(236 reviews)</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 2, borderTop: '1px solid #e5eaef', pt: 2 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: 500 }}>Colors:</Typography>
                                        </Box>
                                        <Box sx={{ ml: 0.4 }}>
                                            <Checkbox defaultChecked />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: 500 }}>QTY:</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                                            <Box>
                                                <Button size='small' sx={{ border: "1px solid #1976d2", minWidth: "0px", borderRight: 0, borderRadius: "4px 0px 0px 4px" }}
                                                    onClick={() =>
                                                        setCount((c) => c - 1)
                                                    }
                                                >
                                                    <RemoveIcon />
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button size='small' sx={{ border: "1px solid #1976d2", minWidth: "35px", borderRadius: 0 }}>
                                                    <Typography>{count}</Typography>
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button size='small' sx={{ border: "1px solid #1976d2", minWidth: "0px", borderLeft: 0, borderRadius: "0px 4px 4px 0px" }}
                                                    onClick={() =>
                                                        setCount((c) => c + 1)
                                                    }
                                                >
                                                    <RemoveIcon />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 4, borderTop: '1px solid #e5eaef', pt: 4 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                        <Box>
                                            <Button variant='contained'>Buy Now</Button>
                                        </Box>
                                        <Box sx={{ ml: 2 }}>
                                            <Button variant='contained' color='secondary'>Add To Cart</Button>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: 14 }}>Dispatched in 2-3 weeks</Typography>
                                    </Box>
                                    <Box sx={{}}>
                                        <Link style={{ fontSize: "14px", textDecoration: "none" }}>Why the longer time for delivery?</Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ border: "1px solid #e5eaef", p: 3, borderRadius: "7px", mt: 4 }}>
                        <Box>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<DescriptionOutlinedIcon />} iconPosition="start" label="Description" />
                                        <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<RateReviewOutlinedIcon />} iconPosition="start" label="Reviews" />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel className="tabpanel-pad" value={value} index={0}>
                                    <Box>
                                        <Box>
                                            <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
                                                Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque eu tincidunt a,
                                                aliquet sit amet lorem.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ mt: 4, fontSize: 14 }}>
                                                Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper.
                                                Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.
                                            </Typography>
                                            <Typography sx={{ mt: 4, fontSize: 14 }}>
                                                Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit amet eros in, iaculis auctor magna.
                                                Pellentesque sit amet accumsan urna, sit amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante ipsum
                                                primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CustomTabPanel>
                                <CustomTabPanel className="tabpanel-pad" value={value} index={1}>
                                    <Reviews />
                                </CustomTabPanel>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Details