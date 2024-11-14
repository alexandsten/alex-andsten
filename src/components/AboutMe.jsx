import { Grid, Stack, Typography, styled as muiStyled } from '@mui/material';
import React from 'react';
import pulse from 'react-animations/lib/pulse';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes, css } from 'styled-components';
import { useMediaQuery } from '@mui/material';
import fadeIn from 'react-animations/lib/fade-in';
import { styled as muiCustomStyled } from '@mui/system'; 

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

  const Text = muiStyled(Typography)({
      fontFamily: 'Gotu',
      color: 'white',
      fontSize: '0.9em'
  });

  const TextPowerBIHeader = muiStyled(Typography)({
      fontSize: '1.8em', 
      fontFamily: 'VT323', 
      color: 'white'
  });

  const TextPowerBI = muiStyled(Typography)({
      fontSize: '1.3em', 
      fontFamily: 'VT323',
      color: 'white'
  });

  const CustomTypography = muiStyled(Typography)(({ theme }) => ({
    fontFamily: 'Gotu', 
    color: 'white', 
    fontSize: '14px',
    '&::first-letter': {
      fontSize: isSmallScreen ? '24px' : '30px',
      fontWeight: 'bold',
    },
  }));

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,  
  });

  const skillsColumn1 = [
    'TypeScript',
    'JavaScript',
    'React / React Native',
    'HTML',
    'CSS',
    'Git',
  ];

  const skillsColumn1Icons = [
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript--v2"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v2.png" alt="html-5--v2"/>,
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/git.png" alt="git"/>,
  ];

  const skillsColumn2 = [
    'NodeJS',
    'NoSQL / Firebase',
    'Jest',
    'Rest API',
    'Figma',
    'Wordpress',
  ];

  const skillsColumn2Icons = [
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/>,
    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" alt="external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/api.png" alt="api"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/wordpress.png" alt="wordpress"/>,
  ];


  // const educationColumn = [
  //   'Frontend Developer, JENSEN Vocational School. 2022 - 2024',
  //   'Interactive Media and Web Technologies, Linnaeus University. 2020-2021',
  //   '3-year IT/Media High School Education, John Bauer. 2008-2011',
  // ];

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isLargeScreen = useMediaQuery('(max-width:1400px)');



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
      <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
        {/* <Typography
          sx={{ fontFamily: 'Gotu', fontSize: '28px', fontWeight: 'bold', color: 'white' }}
        >
          Frontend developer
        </Typography> */}
        {/* <FadeDiv> */}
          <CustomTypography>
            I'm a frontend developer based in Stockholm, constantly exploring new
            projects and expanding my skill set.
          </CustomTypography>
          <CustomTypography>
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
        <Grid container width={'100%'}>
          <Grid item sm={12} md={4} width={'100%'}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
              
              {
                isSmallScreen ?
                  (
                    <>
                      <h3>Skills</h3>
                      <Stack flexDirection={'row'} gap={5} mt={7}>
                        <Stack flexDirection={'column'} gap={2} width={'15em'}>
                          {skillsColumn1.map((skill, index) => (
                            <Stack key={index} flexDirection={'row'} gap={2}  
                              justifyContent={'space-between'} alignItems="center">
                              <Text>
                                {skill}
                              </Text>
                                {skillsColumn1Icons[index]}
                            </Stack>
                          ))}
                        </Stack>
                        {/* <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn2.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack> */}
                      </Stack>
                    </>
                  )
                  : 
                  (
                    <AnimatedDivLeft ref={ref} isVisible={inView}> 
                      <h3>Skills</h3>
                      <Stack flexDirection={'row'}  gap={5} mt={7}>
                        <Stack flexDirection={'column'} gap={2}  width={'15em'}>
                            {skillsColumn1.map((skill, index) => (
                              <Stack key={index} flexDirection={'row'} gap={10}  
                              justifyContent={'space-between'} alignItems="center" 
                                >
                                <Text>
                                  {skill}
                                </Text>
                                  {skillsColumn1Icons[index]}
                              </Stack>
                            ))}
                          </Stack>
                        {/* <Stack flexDirection={'column'} gap={2}>
                          {skillsColumn2.map((skill, index) => (
                            <Typography key={index} sx={{ fontFamily: 'Gotu', color: 'white' }}>
                              {skill}
                            </Typography>
                          ))}
                        </Stack> */}
                      </Stack>
                    </AnimatedDivLeft>
                  )
              }
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
            <h3>&nbsp;</h3>
            <Stack flexDirection={'column'} gap={2} width={'15em'}>
                {skillsColumn2.map((skill, index) => (
                  <Stack  key={index} flexDirection={'row'} gap={2}  
                    justifyContent={'space-between'} alignItems="center">
                    <Text>
                      {skill}
                    </Text>
                      {skillsColumn2Icons[index]}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
              
              {isSmallScreen ? 
              (
                <Stack flexDirection={'column'} gap={2}>
                  <Stack gap={3}>
                    <h3>Experience</h3>
                      <Stack>
                        <Text>
                          Nostra / Nostradamage. 2024 - ongoing
                        </Text>
                        <Stack width={'80%'}>
                          <Text>
                            - React, JavaScript, MUI, Firebase, NoSQL Database
                          </Text>
                        </Stack>
                      </Stack>
                      <Stack>
                        <Text>
                          Nobel Week Lights mobile app. 2024 - ongoing
                        </Text>
                        <Stack width={'80%'}>
                          <Text>
                            - React Native, Wordpress Database, Mapbox
                          </Text>
                        </Stack>
                      </Stack>
                    <Stack>
                      <Text>hitRact internship. 2023 - 2024</Text>
                      <Stack width={'80%'}>
                        <Text>
                          - React, TypeScript, MUI
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              ) : 
                <AnimatedDivRight ref={ref} isVisible={inView}>
                  <Stack gap={3}>
                    <h3>Experience</h3>
                      <Stack>
                        <Text>Nostra / Nostradamage. 2024 - ongoing</Text>
                        <Stack width={'80%'}>
                          <Text>
                            - React, JavaScript, MUI, Firebase, NoSQL Database
                          </Text>
                        </Stack>
                      </Stack>
                      <Stack>
                        <Text>
                          Nobel Week Lights mobile app. 2024 - ongoing
                        </Text>
                        <Stack width={'80%'}>
                          <Text>
                            - React Native, Wordpress Database, Mapbox
                          </Text>
                        </Stack>
                      </Stack>
                    <Stack>
                      <Text>hitRact internship. 2023 - 2024</Text>
                      <Stack width={'80%'}>
                        <Text>
                          - React, TypeScript, MUI
                        </Text>
                      </Stack>
                    </Stack>
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
