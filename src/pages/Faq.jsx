import { Box, Breadcrumbs, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>FAQ</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> FAQ </Typography>
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
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "26px", fontWeight: 500 }}>Frequently asked questions</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", mt: 1 }}>
                        <Typography sx={{}}>Get to know more about ready-to-use admin dashboard templates</Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontWeight: 500, p: 0.6, }}>What is an Admin Dashboard?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: "15px", }}>
                                    Admin Dashboard is the backend interface of a website or an application that helps to manage the website's overall content and settings.
                                    It is widely used by the site owners to keep track of their website, make changes to their content, and more.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontWeight: 500, p: 0.6, }}>What should an admin dashboard template include?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: "15px", }}>
                                    Admin dashboard template should include user & SEO friendly design with a variety of components and application designs to help create your own
                                    web application with ease. This could include customization options, technical support and about 6 months of future updates.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontWeight: 500, p: 0.6, }}>Why should I buy admin templates from AdminMart?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: "15px", }}>
                                    Adminmart offers high-quality templates that are easy to use and fully customizable. With over 101,801 happy customers &
                                    trusted by 10,000+ Companies. AdminMart is recognized as the leading online source for buying admin templates.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontWeight: 500, p: 0.6, }}>Do Adminmart offers a money back guarantee?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: "15px", }}>
                                    There is no money back guarantee in most companies, but if you are unhappy with our product, Adminmart gives you a 100% money back guarantee.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto", background: "rgb(236, 242, 255)", p: 5, borderRadius: "6px" }}>
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", border: "2px solid #fff" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" alt="" />
                            </Box>
                            <Box sx={{ marginLeft: '-10px' }}>
                                <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", border: "2px solid #fff" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg" alt="" />
                            </Box>
                            <Box sx={{ marginLeft: '-10px' }}>
                                <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", border: "2px solid #fff" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" alt="" />
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>Still have questions</Typography>
                        </Box>
                        <Box sx={{ textAlign: "center", mt: 1 }}>
                            <Typography>Can't find the answer your're looking for ? Please chat to our friendly team.</Typography>
                        </Box>
                        <Box sx={{ textAlign: "center", mt: 3 }}>
                            <Button sx={{ textTransform: "capitalize" }} variant='contained'>Chat with us</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Faq