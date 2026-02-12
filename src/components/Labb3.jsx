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
import MainMenu from './MainMenu';

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

const Labb3 = () => {

  const Text = muiStyled(Typography)({
      fontFamily: 'Gotu',
      color: 'white',
      fontSize: '0.9em'
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
    'React & React Native',
    'HTML',
    'CSS',
    'SQL',
    'Git',
  ];

  const skillsColumn1Icons = [
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript--v2"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v2.png" alt="html-5--v2"/>,
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/>,
    <img width="30" height="30" src="https://img.icons8.com/?size=100&id=6o3xw2TdxzCR&format=png&color=000000" alt="sql"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/git.png" alt="git"/>,
  ];

  const skillsColumn2 = [
    'NodeJS',
    'NoSQL / Firebase',
    'Jest',
    'Rest API',
    'Figma',
    'DNS',
    'Wordpress',
  ];

  const skillsColumn2Icons = [
    <img width="30" height="30" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/>,
    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" alt="external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/api.png" alt="api"/>,
    <img width="30" height="30" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>,
    <img width="30" height="30" src="https://img.icons8.com/?size=100&id=hh0cnaxPHumh&format=png&color=000000" alt="figma--v1"/>,
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
        sx={{
          background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)',
          minHeight: '100vh',
        }}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Stack justifyContent={'flex-start'} alignItems={'center'}>
          <h1>MFA & Conditional Access</h1>
        </Stack>
         <MainMenu />
        <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
        <h2>Labb 3 – MFA och Conditional Access</h2>
        <div class="lab-section">
          <h3>Översikt</h3>
          <p>
            I den här labben har jag arbetat med MFA och Conditional Access i Entra ID.
          </p>
          <p>
            Fokus har varit att förstå hur åtkomst kan styras baserat på användare,
            applikation, enhet och risk.
          </p>
          <ul>
            <li>Användare</li>
            <li>Applikation</li>
            <li>Enhet</li>
            <li>Risk</li>
          </ul>
          <p>
            Policys har satts i <strong>Report-only-läge</strong>, vilket speglar hur man ofta arbetar i produktion – testa först, aktivera sedan.
          </p>
        </div>

        <div class="lab-section">
          <h3>Scenario</h3>
          <p>Utgångspunkt:</p>
          <ul>
            <li>Alla användare ska kräva MFA vid inloggning</li>
            <li>Administratörer ska ha förstärkt skydd</li>
            <li>Åtkomst ska kunna begränsas baserat på risk eller enhet</li>
          </ul>
          <p>
            Målet var att designa policies som är säkra utan att påverka användare negativt.
          </p>
        </div>

        <div class="lab-section">
          <h3>Så här gjorde jag</h3>

          <div class="lab-subsection">
            <h4>1. Conditional Access-policy (Report-only)</h4>
            <p>
              Jag navigerade till <strong>Entra ID → Protection → Conditional Access</strong>
              och skapade en ny policy.
            </p>
            <p>Policyn konfigurerades med:</p>
            <ul>
              <li>Testgrupp</li>
              <li>Alla Cloud Apps</li>
              <li>Grant control: <strong>Require MFA</strong></li>
              <li>Policy mode: Report-only</li>
            </ul>
            <p>
              Syftet var att analysera policyns effekt utan att påverka faktiska inloggningar.
            </p>
            <p><em>Screenshot 1: Policyöversikt (namn, assignments, grant control)</em></p>
            <p><em>Screenshot 2: Grant control – Require MFA</em></p>
          </div>

          <div class="lab-subsection">
            <h4>2. Sign-in logs och policyeffekt</h4>
            <p>
              Jag analyserade inloggningar via <strong>Entra ID → Sign-in logs</strong>.
            </p>
            <p>I denna vy kan man se:</p>
            <ul>
              <li>Vilka Conditional Access-policys som matchade</li>
              <li>Om MFA skulle ha krävts</li>
              <li>Om flera policys påverkade samma inloggning</li>
            </ul>
            <p>
              Eftersom policyn var i Report-only-läge kunde jag se hur den skulle ha träffat
              utan att blockera eller kräva MFA i praktiken.
            </p>
            <p>
              Kolumnerna <strong>Conditional Access</strong> och <strong>Result</strong>
              användes för att utvärdera policyns effekt.
            </p>
            <p><em>Screenshot 3: Sign-in log → Conditional Access-flik</em></p>
          </div>

          <div class="lab-subsection">
            <h4>3. Assignments och scope</h4>
            <p>
              I <strong>Assignments</strong>-vyn definierade jag exakt vilka användare,
              grupper och appar som skulle omfattas.
            </p>
            <p>
              Jag markerade testgruppen och visade hur scope kan begränsas
              för att minska risk vid utrullning.
            </p>
            <p>
              Möjligheten att specificera devices och appar visar flexibiliteten
              i hur policyn appliceras.
            </p>
            <p><em>Screenshot 4: Assignments – Users, Groups och Devices</em></p>
          </div>

          <div class="lab-subsection">
            <h4>4. Conditions (exempel)</h4>
            <p>
              I policyvyn konfigurerade jag även <strong>Conditions</strong> som
              utvärderas innan policyn träder i kraft.
            </p>
            <ul>
              <li>Device state</li>
              <li>Location</li>
              <li>Client apps</li>
            </ul>
            <p>
              Detta visar hur åtkomst kan differentieras baserat på miljö,
              risknivå och enhetsstatus.
            </p>
            <p><em>Screenshot 5: Conditional Access → Conditions</em></p>
          </div>
        </div>

        <div class="lab-section">
          <h3>Risker jag identifierade</h3>
          <ul>
            <li>Glömma exkludera break-glass-konto</li>
            <li>Applicera policy på “All users” för tidigt</li>
            <li>Konflikt mellan flera Conditional Access-policys</li>
            <li>Oavsiktligt blockera legacy authentication</li>
          </ul>
          <p>
            Conditional Access är kraftfullt – men kräver noggrann analys och testning innan aktivering.
          </p>
        </div>

        <div class="lab-section">
          <h3>Reflektion</h3>
          <p>
            Den här labben visar hur central Conditional Access är i Microsoft 365-säkerhet.
          </p>
          <p>
            Att arbeta i Report-only-läge gör det möjligt att analysera effekten
            innan enforcement aktiveras.
          </p>
          <p>
            Genom att använda Sign-in logs, Assignments och Conditions kan man
            förstå exakt hur en policy påverkar åtkomst.
          </p>
          <p>
            Detta är den typ av analys jag skulle genomföra innan jag aktiverar
            en ny åtkomstpolicy i en produktionsmiljö, särskilt för MFA
            och administratörskonton.
          </p>
        </div>

        </Stack>
        <Stack width={'80%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
          <Grid container width={'100%'}>
            <Grid item sm={12} md={4} width={'100%'}>
              <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                
              
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        
      </Stack>
  );
};

export default Labb3;
