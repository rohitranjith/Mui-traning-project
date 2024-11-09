import { Box, Container, Hidden, IconButton, Typography } from '@mui/material'

import { useEffect } from 'react';
// import InlineEditor from 'path-to-inline-editor';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react'

const Template = () => {

    // useEffect(() => {
    //     InlineEditor
    //         .create(document.querySelector('#editor'))
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    const [imagePreview, setImagePreview] = useState('');
    const [imagePreviewBottom, setImagePreviewBottom] = useState('');

    function readURL(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (input.id === "imageUploadTop") {
                    setImagePreview(e.target.result);
                } else if (input.id === "imageUploadBottom") {
                    setImagePreviewBottom(e.target.result);
                } else {
                    return
                }


            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function handleImageUpload(event) {
        readURL(event.target);       
    }


    return (
        <Container sx={{ width: "1048px", height: "1376px", background: "#fff", padding: "20px", boxShadow: "0 5px 15px rgba(0,0,0,.08)" }}>
            <Box sx={{ background: "#56cae1", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
                <Box sx={{ display: "flex" }}>
                    <Box className="triangle-design" sx={{}}>

                    </Box>
                    <Box sx={{ background: "#fff", width: "500px", height: "500px", }}>
                        <Box sx={{ width: "250px", height: "180px", margin: "40px 50px", position: "absolute" }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="../../assets/logo.png" alt="logo" />
                        </Box>
                    </Box>
                    <Box sx={{ p: 3, width: "500px" }}>
                        <Box sx={{ textAlign: "right" }}>
                            {/* <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor&nbsp;5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            /> */}
                            <Typography id="editor" sx={{ fontSize: "44px", textTransform: "uppercase", color: '#fff' }} component="h1">for sale</Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Box>
                                <Typography className='text-truncate' sx={{ fontSize: "30px", color: "#000" }} component="h2">Property Description</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography className='prop-desc-tc' sx={{ fontSize: "15px", color: "#000" }}>BDR Fine Homes presents a fresh new Modern design on a one of a kind 33K+ street to course golf course frontage lot in Medina.Over 7,700 SF of luxury. 6 bedroom Suites including separate GenSuite, Chefs Kitchen, Prep Kitchen, Wine Grotto, Games, Fitness, Spacious Outdoor Living Room, Motor Court, 5 car garage, Carriage House, and more.Build w/ the BDR Teama proud two time winner of the coveted Builder of the Year Award presented annually by the Master Builders Association.GRAND OPENING!</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ width: "606px", height: "606px", padding: "20px", border: "15px solid #fff", borderRadius: "50%", overflow: "hidden", position: "absolute", left: "-150px", top: "19%", background: "#56cae1", zIndex: 1 }}>
                        <Box className="img-hover-top" sx={{ width: "590px", height: "590px", overflow: "hidden", borderRadius: "50%", border: "8px solid #fff", position: "relative" }}>
                            {/* <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="../../assets/home.png" alt="home" /> */}
                            <label style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                <input style={{ visibility: "hidden" }} id="imageUploadTop" type="file" onChange={handleImageUpload} />
                                <Box sx={{ position: "absolute", top: "50%", left: "50%", }}>
                                    <Box sx={{ transition: "0.4s", visibility: "hidden", opacity: 0, border: "2px solid #fff", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <CloudUploadIcon sx={{ width: "30px", height: "30px", color: "#fff" }}></CloudUploadIcon>
                                    </Box>
                                </Box>
                            </label>
                            {imagePreview && (
                                <Box
                                    style={{
                                        backgroundImage: `url(${imagePreview})`,
                                        width: '100%',
                                        height: '100%',
                                        backgroundSize: 'cover'
                                    }}
                                ></Box>)}
                            {/* <Box style={{ backgroundImage: 'url("../../assets/home.png")', backgroundSize: "cover", width: "100%", height: "100%", }}></Box> */}
                        </Box>
                    </Box>
                    <Box sx={{ width: "490px", marginLeft: "auto", }}>
                        <Box sx={{ padding: "20px", background: "#62677d", textAlign: "center" }}>
                            <Typography sx={{ fontSize: "30px", color: "#fff" }} component="h2">$72,480,000</Typography>
                        </Box>
                        <Box sx={{ padding: '30px 50px' }}>
                            <Box>
                                <Typography sx={{ fontSize: "24px", fontWeight: 500, color: "#000" }} component="h2">Features</Typography>
                            </Box>
                            <Box>
                                <ul>
                                    <li style={{ fontSize: "18px", color: "#000" }}>3 Bedrooms</li>
                                    <li style={{ fontSize: "18px", color: "#000" }}>2 Bathrooms</li>
                                    <li style={{ fontSize: "18px", color: "#000" }}>3200+/- Sq. Ft.</li>
                                    <li style={{ fontSize: "18px", color: "#000" }}>Heated Pool</li>
                                    <li style={{ fontSize: "18px", color: "#000" }}>Park</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box className="triangle-design-bottom" sx={{ width: "795px", height: "522px", position: "absolute", bottom: "0", background: "#62677d" }}>
                        <Box sx={{ mt: 18 }}>
                            <Box sx={{ ml: 4, width: "495px", height: "170px" }}>
                                <Typography sx={{ fontSize: "36px", color: '#fff', lineHeight: "45px" }} component="h1">1042 East El Camino Real Sunnyvale CA 94087</Typography>
                            </Box>
                            <Box sx={{ ml: 4, width: "500px" }}>
                                <Box>
                                    <Typography sx={{ fontSize: "26px", color: '#fff', }} component="h1">Contact</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography sx={{ fontSize: "20px", color: '#fff', }} component="h1">000-000-0000</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontSize: "20px", color: '#fff', }} component="h1">janesmith@bestrealestate.com</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={{ fontSize: "20px", color: '#fff', }} component="h1">www.bestrealestate.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "476px", height: "476px", padding: "20px", border: "15px solid #fff", borderRadius: "50%", overflow: "hidden", position: "absolute", right: "-115px", bottom: "-115px", background: "#56cae1" }}>
                        <Box className="img-hover-bot" sx={{ width: "460px", height: "460px", overflow: "hidden", borderRadius: "50%", border: "8px solid #fff" }}>
                            {/* <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="../../assets/living.png" alt="Living" /> */}
                            {/* <Box style={{ backgroundImage: 'url("../../assets/living.png")', backgroundSize: "cover", width: "100%", height: "100%", }}></Box> */}
                            <label style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                <input style={{ visibility: "hidden" }} type="file" id="imageUploadBottom" onChange={handleImageUpload} />
                                <Box sx={{ position: "absolute", top: "50%", left: "50%", }}>
                                    <Box sx={{ transition: "0.4s", visibility: "hidden", opacity: 0, border: "2px solid #fff", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <CloudUploadIcon sx={{ width: "30px", height: "30px", color: "#fff" }}></CloudUploadIcon>
                                    </Box>
                                </Box>
                            </label>
                            {imagePreviewBottom && (
                                <Box
                                    style={{
                                        backgroundImage: `url(${imagePreviewBottom})`,
                                        width: '100%',
                                        height: '100%',
                                        backgroundSize: 'cover'
                                    }}
                                ></Box>)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Template