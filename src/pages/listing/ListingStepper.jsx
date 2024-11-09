import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { Slide } from '@mui/material';
import PropertyType from './PropertyType';
import Location from './Location';
import About from './About';

const steps = ['Listing', 'Location', 'About', 'Pricing'];

const ListingStepper = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    return (
        <Box>
            <Box className="scroll-none" sx={{ width: '100%', minHeight: { xs: "88vh", sm: "75vh", xl: "72vh" }, display: "flex", flexDirection: "column", justifyContent: "space-between", pb: 1, overflowY: "auto" }}>
                <Box>
                    <Stepper sx={{ color: "#633ccf" }} activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            // if (isStepOptional(index)) {
                            //     labelProps.optional = (
                            //         <Typography variant="caption">Optional</Typography>
                            //     );
                            // }
                            // if (isStepSkipped(index)) {
                            //     stepProps.completed = false;
                            // }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel className="stepper-color" {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <Box sx={{ p: 1, mt: 1.5 }}>
                        {activeStep === 0 &&
                            <Box sx={{ flexGrow: 1, pb: 2 }}>
                                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                                    <Box>
                                        <PropertyType />
                                    </Box>
                                </Slide>
                            </Box>
                        }
                        {activeStep === 1 &&
                            <Box sx={{ flexGrow: 1, pb: 2 }}>
                                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                                    <Box>
                                        <Location />
                                    </Box>
                                </Slide>
                            </Box>
                        }
                        {activeStep === 2 &&
                            <Box sx={{ flexGrow: 1, pb: 2 }}>
                                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                                    <Box>
                                        <About />
                                    </Box>
                                </Slide>
                            </Box>
                        }
                        {activeStep === 3 &&
                            <Box sx={{ flexGrow: 1, pb: 2 }}>
                                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                                    <Box>
                                        <Typography>sample 4</Typography>
                                    </Box>
                                </Slide>
                            </Box>
                        }
                    </Box>
                </Box>

                <Box>
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                variant='outlined'
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button variant='outlined' onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button variant='contained' sx={{
                                background: "#633ccf", '&:hover': {
                                    background: '#633ccf',
                                }
                            }} onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                </Box>
            </Box>
        </Box>
    )
}

export default ListingStepper