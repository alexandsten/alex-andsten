import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import pulse from 'react-animations/lib/pulse';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes, css } from 'styled-components';
import { useMediaQuery } from '@mui/material';
import fadeIn from 'react-animations/lib/fade-in';
import { styled as muiStyled } from '@mui/system'; 

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 2s ${pulseAnimation} infinite;
`;

const SlideInRightAnimation = keyframes`${slideInRight}`;

const SlideInRightDiv = styled.div`
  animation: 1s ${SlideInRightAnimation};
`;

const SlideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeftDiv = styled.div`
  animation: 1s ${SlideInRightAnimation};
`;

const AnimatedDivRight = styled.div`
  animation: ${({ isVisible }) => isVisible ? css`1s ${SlideInRightAnimation}` : 'none'};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;
const AnimatedDivLeft = styled.div`
  animation: ${({ isVisible }) => isVisible ? css`1s ${SlideInLeftAnimation}` : 'none'};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const AboutMe = () => {



  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,  
  });

  const skillsColumn1 = [
    'TypeScript',
    'JavaScript',
    'React',
    'React Native',
    'HTML',
    'CSS',
    'Tailwind',
  ];
  
  const skillsColumn2 = [
    'REST API',
    'Axios',
    'Node.js',
    'Firebase',
    'Git',
    'Jest',
  ];

  const educationColumn = [
    'Frontend Developer, JENSEN Vocational School. 2022 - 2024',
    'Interactive Media and Web Technologies, Linnaeus University. 2020-2021',
    '3-year IT/Media High School Education, John Bauer. 2008-2011',
  ];

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isLargeScreen = useMediaQuery('(max-width:1400px)');

  const CustomTypography = muiStyled(Typography)(({ theme }) => ({
    '&::first-letter': {
      fontSize: isSmallScreen ? '24px' : '30px',
      fontWeight: 'bold',
    },
  }));

  return (
    <Stack
      id="aboutMe"
      minWidth={'100vw'}
      sx={{
        background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)',
        minHeight: '100vh',
      }}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      <Stack justifyContent={'flex-start'} alignItems={'center'}>
        <h3>Experience & skills</h3>
      </Stack>
      <Stack width={'80%'} spacing={1} pt={5}>
        {/* <Typography
          sx={{ fontFamily: 'Gotu', fontSize: '28px', fontWeight: 'bold', color: 'white' }}
        >
          Frontend developer
        </Typography> */}
        {/* <FadeDiv> */}
          <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px' }}>
            I'm a frontend developer based in Stockholm, constantly exploring new
            projects and expanding my skill set.
          </CustomTypography>
          <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px'  }}>
            While I specialize in frontend development, particularly with
            frameworks like React, I'm also diving into backend technologies and
            database management.
          </CustomTypography>
          {/* <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px'  }}>
            I’m passionate about creativity and problem-solving, always eager to
            learn and discover new ways to innovate through code.
          </CustomTypography>
          <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px'  }}>
            With a background in programming and hands-on experience in various
            projects, I’m excited to share my journey with you.
          </CustomTypography> */}
          <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px'  }}>
            Feel free to explore my work and learn more about what I do!
          </CustomTypography>
        {/* </FadeDiv> */}
      </Stack>
      <Stack width={'80%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
              
              {
                isSmallScreen ?
                  (
                    <>
                      <h3>Skills</h3>
                      <Stack flexDirection={'row'} gap={5} mt={7}>
                        <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn1.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack>
                        <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn2.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack>
                      </Stack>
                    </>
                  )
                  : 
                  (
                    <AnimatedDivLeft ref={ref} isVisible={inView}> 
                      <h3>Skills</h3>
                      <Stack flexDirection={'row'} gap={5} mt={7}>
                        <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn1.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack>
                        <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn2.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack>
                      </Stack>
                    </AnimatedDivLeft>
                  )
              }
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
              
                <h3>Experience</h3>
                <Stack>
                  <Typography sx={{ fontFamily: 'Gotu', color: 'white' }}>Nostra / Nostradamage. 2024 - ongoing</Typography>
                  <Stack width={'80%'}>
                    <Typography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px' }}>
                      - React, JavaScript, MUI, Firebase, NoSQL Database
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Typography sx={{ fontFamily: 'Gotu', color: 'white' }}>
                    Nobel Week Lights mobilapplikation. 2024 - ongoing
                  </Typography>
                  <Stack width={'80%'}>
                    <Typography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px' }}>
                      - React Native, Wordpress Database, Mapbox
                    </Typography>
                  </Stack>
                </Stack>
              <Stack>
                <Typography sx={{ fontFamily: 'Gotu', color: 'white' }}>hitRact internship. 2023 - 2024</Typography>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px' }}>
                    - React, TypeScript, MUI
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
              
              {isSmallScreen ? 
              (
                <Stack gap={3}>
                  <h3>Education</h3>
                  {educationColumn.map((skill, index) => (
                      <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                        {skill}
                      </Typography>
                    ))}
                </Stack>
              ) : 
                <AnimatedDivRight ref={ref} isVisible={inView}>
                  <Stack gap={3}>
                    <h3>Education</h3>
                    {educationColumn.map((skill, index) => (
                        <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                          {skill}
                        </Typography>
                      ))}
                  </Stack>
                </AnimatedDivRight>
              }
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      
    </Stack>
  );
};

export default AboutMe;
