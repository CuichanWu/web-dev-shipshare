import React, { useState } from "react";
import Header from "../../../third-party/layouts/dashboard/header"
import NavVertical from "../../../third-party/layouts/dashboard/nav/NavVertical"
import Main from "../../../third-party/layouts/dashboard/Main"
import { Container, Typography, Box, Button } from '@mui/material';
import {Pagination} from "@mui/lab";

const content = [
  {
    // title: "Tutorial",
    subtitle: "This tutorial consists of six steps. \nLet's walk through how to use our service step by step.",
    imageSource: require('../../../images/tutorial.png')
  },
  {
    title: "Ship to the Warehouse",
    subtitle: "Shop online and have them shipped to our warehouse address. \nBe sure to include the warehouse address as the shipping address for your package.",
    imageSource: require('../../../images/shiptothewarehouse.png')
  },
  {
    title: "Add Parcels",
    subtitle: "Once your package has been shipped, \n" +
      "you will receive a tracking number.\n" +
      "Fill in the tracking number in My Parcels page to keep track of your package.",
    imageSource: require('../../../images/addparcels.png')
  },
  {
    title: "Track Parcels",
    subtitle: "Stay updated on your parcel’s location and delivery status in My Parcels. \nOnce your package arrives at our warehouse, we'll weigh it and provide you with its weight information.",
    imageSource: require('../../../images/trackparcels.png')
  },
  {
    title: "Join or Create a Group",
    subtitle: "Choose a group which destination is close to you and fits your preferred shipping method (such as air or sea, standard or sensitive line). \nIf there is no suitable group available, you can create your own.",
    imageSource: require('../../../images/joinorcreateagroup.png')
  },
  {
    title: "Add Parcels to the Group",
    subtitle:
      "After joining a group, you can select which of your packages that have arrived at our warehouse to add to the group, and pay for the total weight. " +
      "Once payment is confirmed, we will prepare the package for shipment.",
    imageSource: require('../../../images/AddParcelsToTheGroup.png')
  },
  {
    title: "Pick Up Your Parcels",
    subtitle: "You can track the group shipment in real time on the Shipments page. \nOnce the group shipment arrives, you will be notified to pick up your package from the group leader's location.",
    imageSource: require('../../../images/pickupyourparcels.png')
  },
]


const Tutorials = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [screenNumber, setScreenNumber] = useState(0);
  const pageCount = 6;
  const handleNextPageClick = () => {
    if (screenNumber < pageCount) {
      setScreenNumber(screenNumber + 1);
    }
  };
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <>
      <Header onOpenNav={handleOpen} />
      {/*-------Box is the layout of the whole page-----*/}
      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {/*--------------Navigation bar------------------*/}
        <NavVertical openNav={open} onCloseNav={handleClose} />

        {/*--------------Main Content----------------------*/}
        <Main>
          <Container maxWidth='md'>
            <Typography variant="h3" component="h1" paragraph>
              Tutorials
            </Typography>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative',}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative',}}>
                <img
                  src={content[screenNumber].imageSource}
                  style={{alignSelf: 'center'}}
                  alt="mainPhoto"/>
                <div >
                  <Typography sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 22,
                  }}>{content[screenNumber].title}</Typography>
                  <Typography sx={{marginTop: 7, justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: "gray", fontSize: 16, marginBottom:20,
                  }}>
                    {content[screenNumber].subtitle}
                  </Typography>
                </div>
              </div>
              <div style={{height: 80}}>
                {
                  screenNumber === 0 && <Button
                    variant="contained" color="primary" style={{width: 200, height: 40, borderRadius: 20}}
                    onClick={() => {setScreenNumber(1); setShowTutorial(true)}}
                  >
                    <Typography >Get started</Typography>
                  </Button>
                }
              </div>
            </div>
          </Container>

          {/*pagination*/}
          {showTutorial &&
            <Pagination
              count={pageCount}
              page={screenNumber}
              onChange={(event, value) => {
                setScreenNumber(value)
              }}
              onNext={handleNextPageClick}
              size='large'
              showFirstButton
              showLastButton
              sx={{
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
              }}
            />
          }
        </Main>
        {/*------------------------------------*/}
      </Box>
    </>
  );
};
export default Tutorials;