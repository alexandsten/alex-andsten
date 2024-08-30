import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';
import pulse from 'react-animations/lib/pulse';
import nostraPic1 from '../img/nostraPic2.png'
import hitractPic1 from '../img/hitract1.png'
import nobelPic1 from '../img/nobelPic2.png'
import paperBgPic1 from '../img/paperbackground1.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MyProjects = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const pulseAnimation = keyframes`${pulse}`;

    const PulseDiv = styled.div`
      animation: 2s ${pulseAnimation} infinite;
    `;

    const CustomSlider = styled(Slider)`
        .slick-list {
          overflow: hidden;  
        }
      .slick-prev:before {
        z-index: 1;
        color: black; 
      }
      .slick-next:before {
        color: black; 
      }
    `;
  return (
    <>
      <Stack minHeight={'100vh'} width={'100vw'} pb={10} sx={{ backgroundColor: 'white', overflowX: 'hidden', overflowY: 'hidden' }}
  justifyContent={'center'} alignItems={'center'}
>
  <h2>Work & projects</h2>

  <Stack width={'75%'} mt={5}>
    <CustomSlider {...settings}>
      
      {/* First Slide */}
      <Stack>
        <Stack minHeight={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '20px', }}
        >
          <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${nostraPic1})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} 
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', backgroundImage: `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.7)), url(${paperBgPic1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', }}
              >
                <Stack p={3} m={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white', height: '10%', padding: '3px', width: '75%', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'  }}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '24px', fontWeight: 'bold'}}>
                    Nostra / Nostradamage
                  </Typography>
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    React, JavaScript, MUI, Firebase, Realtime Database
                  </Typography>
                </Stack>
                <Stack gap={2} p={3} m={3} height={'100%'} justifyContent={'space-between'} alignItems={'center'} sx={{ 
                      backgroundColor: 'white',  
                      borderRadius: '15px', 
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      maxHeight: '300px', 
                      overflowY: 'auto',  
                  }}>
                  <Typography sx={{ fontFamily: "Gotu"}}>Since early 2024, together with a friend, I have started the production of a product that we plan to release preliminarily in Q4 2025.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage is a product that uses machine learning and algorithms to analyze past MMA match results and predict the most likely outcomes.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage will be part of Nostra, which will produce several similar products in other sports, serving the same purpose.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage is being developed daily, and its concept and results are making significant progress regularly.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>My role in this project is both frontend and backend developer.
                  </Typography>
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    Product is in an early stage of development.
                  </Typography>
                </Stack>
                <Stack flexDirection={'row'}>
                  <PulseDiv>
                    <Stack p={2} m={3} sx={{ backgroundColor: 'white',  
                          borderRadius: '15px', 
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
                        <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: "none" }}>
                          <Typography sx={{ fontFamily: "Gotu"}}>
                            Visit website
                          </Typography>
                        </a>
                    </Stack>
                  </PulseDiv>
                  <PulseDiv>
                    <Stack p={2} m={3} sx={{ backgroundColor: 'white',  
                          borderRadius: '15px', 
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
                        <a href="https://github.com/alexandsten/nostradamage/" target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: "none" }}>
                          <Typography sx={{ fontFamily: "Gotu"}}>
                            Github
                          </Typography>
                        </a>
                    </Stack>
                  </PulseDiv>
                </Stack>
               
                
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Second Slide */}
      <Stack>
        <Stack minHeight={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '20px', }}
        >
          <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${nobelPic1})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} 
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', backgroundImage: `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.7)), url(${paperBgPic1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', }}
              >
                <Stack p={3} m={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white', height: '10%', padding: '3px', width: '75%', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'  }}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '24px', fontWeight: 'bold'}}>
                    Nobel Week Lights App
                  </Typography>
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    React Native, Wordpress Database, Mapbox
                  </Typography>
                </Stack>
                <Stack gap={2} p={3} m={3} height={'100%'} justifyContent={'space-between'} alignItems={'center'} sx={{ 
                      backgroundColor: 'white',  
                      borderRadius: '15px', 
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      maxHeight: '300px', 
                      overflowY: 'auto',  
                  }}>
                  <Typography sx={{ fontFamily: "Gotu"}}>Early 2024 I was given the task to develop an app for Nobel Lights Week on IOS and android.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nobel Week Lights is a festival that occurs in Stockholm once per year. During this week there are light-based art works all around the town.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>The app I'm developing will show the user where all the art works are located on a map. The user will also be able to read about all the works and their creators.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>The first iteration of the app will be quite basic, but it will add additional features annually.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nobel Week Lights app is not yet in appstore or in google play, it will be released in december.
                  </Typography>
                  
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    Product is in an early stage of development.
                  </Typography>
                </Stack>
                
                <PulseDiv>
                  <Stack p={2} m={3} sx={{ backgroundColor: 'white',  
                        borderRadius: '15px', 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
                      <a href="https://github.com/alexandsten/lightFestival/" target="_blank" rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}>
                        <Typography sx={{ fontFamily: "Gotu"}}>
                          Github
                        </Typography>
                      </a>
                  </Stack>
                </PulseDiv>
                
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Third Slide */}
      <Stack>
        <Stack minHeight={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '20px', }}
        >
          <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${hitractPic1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} 
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', backgroundImage: `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.7)), url(${paperBgPic1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', }}
              >
                <Stack p={3} m={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white', height: '10%', padding: '3px', width: '75%', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'  }}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '24px', fontWeight: 'bold'}}>
                    hitRact
                  </Typography>
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    React, TypeScript, MUI, Axios
                  </Typography>
                </Stack>
                <Stack gap={2} p={3} m={3} height={'100%'} justifyContent={'space-between'} alignItems={'center'} sx={{ 
                      backgroundColor: 'white',  
                      borderRadius: '15px', 
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      maxHeight: '300px', 
                      overflowY: 'auto',  
                  }}>
                  <Typography sx={{ fontFamily: "Gotu"}}>From late 2023 to early 2024 I was an frontend intern for the company hitRact.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>I was working with search functions, adding search filters and fetching data from backend.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>I was using React ,Next.js and MUI. During my time as an intern I was closely following a Figma prototype of the website we were creating.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>The website I was working on is not yet live. It will be live once everything is done.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Until hitRact web 2.0 is done, there is a placeholder website that can be visited.
                  </Typography>
                  
                </Stack>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white'}}>
                    The new version of hitracts website is not yet live.
                  </Typography>
                </Stack>
                
                <PulseDiv>
                  <Stack p={2} m={3} sx={{ backgroundColor: 'white',  
                        borderRadius: '15px', 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
                      <a href="https://hitract.se/" target="_blank" rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}>
                        <Typography sx={{ fontFamily: "Gotu"}}>
                          Visit old website
                        </Typography>
                      </a>
                  </Stack>
                </PulseDiv>
                
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>


    </CustomSlider>
  </Stack>
</Stack>

    </>
  )
}

export default MyProjects
