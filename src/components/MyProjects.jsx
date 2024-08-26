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
  <h2>Arbete & projekt</h2>

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
                <Stack gap={2} p={3} m={3} height={'100%'} justifyContent={'space-between'} alignItems={'center'} sx={{ 
                      backgroundColor: 'white',  
                      borderRadius: '15px', 
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      maxHeight: '300px', 
                      overflowY: 'auto',  
                  }}>
                  <Typography sx={{ fontFamily: "Gotu"}}>Sedan tidigt 2024 har jag tillsammans med en vän startat produktionen av en produkt som vi planerar att ha en release för preliminärt Q4 2025.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage är en produkt som med hjälp av maskininlärning och algoritmer läser av tidigare resultat av MMA matcher och förutspår de mest trovärdiga resultaten. 
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage kommer vara en del av Nostra, som kommer producera flera liknande produkter inom andra sporter, men utföra samma syfte.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Nostradamage utvecklas dagligen och dess koncept och resultat tar regelbunden stora kliv framåt.
                  </Typography>
                  <Typography sx={{ fontFamily: "Gotu"}}>Min roll i detta projekt är både frontend och backendutvecklare.
                  </Typography>
                  
                </Stack>

                <PulseDiv>
                  <Stack p={2} m={3} sx={{ backgroundColor: 'white',  
                        borderRadius: '15px', 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
                      <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}>
                        <Typography sx={{ fontFamily: "Gotu"}}>
                          Visa prototyp
                        </Typography>
                      </a>
                  </Stack>
                </PulseDiv>
                
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Second Slide */}
      <Stack>
        <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '15px' }}
        >
          <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${nobelPic1})`,
              backgroundColor: 'black',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'91%'} width={'91%'} justifyContent={'space-between'} alignItems={'center'} p={3}
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', backgroundColor: '#f4f7e9' }}
              >
                <Stack p={3} mr={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white', height: '10%', padding: '3px', width: '75%', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '24px', fontWeight: 'bold'}}>Nobel Week Lights</Typography>
                </Stack>
                <Stack p={3} mr={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white',  borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
                  <Typography sx={{ fontFamily: "Gotu"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae error cupiditate dolorem eaque, nostrum ipsam ea exercitationem provident tempora veniam aliquid harum, facere, consectetur voluptate veritatis nihil porro necessitatibus.</Typography>
                </Stack>
                <PulseDiv>
                  <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Typography sx={{ fontFamily: "Gotu"}}>
                      Läs mer
                    </Typography>
                  </a>
                </PulseDiv>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Third Slide */}
      <Stack>
        <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '15px' }}
        >
          <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${hitractPic1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'91%'} width={'91%'} justifyContent={'space-between'} alignItems={'center'} p={3}
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', backgroundColor: '#f4f7e9' }}
              >
                <Stack p={3} mr={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white', height: '10%', padding: '3px', width: '75%', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '24px', fontWeight: 'bold'}}>Nobel Week Lights</Typography>
                </Stack>
                <Stack p={3} mr={3} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white',  borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
                  <Typography sx={{ fontFamily: "Gotu"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae error cupiditate dolorem eaque, nostrum ipsam ea exercitationem provident tempora veniam aliquid harum, facere, consectetur voluptate veritatis nihil porro necessitatibus.</Typography>
                </Stack>
                <PulseDiv>
                  <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Typography sx={{ fontFamily: "Gotu"}}>
                      Läs mer
                    </Typography>
                  </a>
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
