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
import labPic1 from '../img/labb4/labb4-bild1.png'
import labPic2 from '../img/labb4/labb4-bild7.png'
import labPic3 from '../img/labb4/labb4-bild10.png'
import labPic4 from '../img/labb4/labb4-bild11.png'
import labPic5 from '../img/labb4/labb4-bild23.png'
import labPic6 from '../img/labb4/labb4-bild22.png'

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

const Labb4 = () => {

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
          <h1>Intune & Compliance</h1>
        </Stack>
         <MainMenu />
        <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
        <h2>Labb 4 – Intune Compliance och Conditional Access</h2>
        <div class="lab-section">
          <h3>Översikt</h3>
          <p>
            I den här labben arbetar jag med Microsoft Intune och Conditional Access
            för att visa hur åtkomst till Microsoft 365 kan styras baserat på en enhets säkerhetsstatus.
          </p>
          <p>Fokus ligger på att:</p>
          <ul>
            <li>Definiera tydliga compliance-krav</li>
            <li>Koppla compliance till åtkomstkontroll</li>
            <li>Förstå hur Entra ID utvärderar enhetens status vid inloggning</li>
            <li>Visa hur hela flödet hänger ihop från policy till åtkomstbeslut</li>
          </ul>
          <p>
            Detta är en central del av modern identitets- och enhetssäkerhet i Microsoft 365.
          </p>
        </div>

        <div class="lab-section">
          <h3>Scenario</h3>
          <p>Utgångspunkt:</p>
          <ul>
            <li>Endast enheter som uppfyller säkerhetskrav ska få åtkomst till M365</li>
            <li>Åtkomst ska kunna differentieras baserat på enhetens status</li>
            <li>Policys ska konfigureras strukturerat och kunna testas kontrollerat</li>
          </ul>
          <p>
            Målet är att visa helhetsförståelse för hur compliance och Conditional Access samverkar.
          </p>
        </div>

        <div class="lab-section">
          <h3>Steg-för-steg</h3>

          <div class="lab-subsection">
            <h4>1. Skapade en Compliance Policy</h4>
            <p>Navigering: <strong>Intune Admin Center → Devices → Compliance policies → Create Policy → Windows 10 and later</strong></p>
            <p>Exempel på krav i policyn:</p>
            <ul>
              <li>Lösenord/PIN</li>
              <li>Kryptering (BitLocker)</li>
              <li>Minsta OS-version</li>
            </ul>
            <img src={labPic1} width="75%" />
            <p><em>Screenshot 1: Compliance policy – konfigurerade säkerhetskrav</em></p>
            <p>
              Syfte: Här definieras vilka tekniska säkerhetskrav en enhet måste uppfylla
              för att klassas som compliant. Compliance är grunden för åtkomstbeslut längre fram.
            </p>
          </div>

          <div class="lab-subsection">
            <h4>2. Kopplade policyn till en säkerhetsgrupp</h4>
            <p>Navigering: <strong>Assignments → Select groups to include</strong></p>
            <p>Policyn tilldelades en testgrupp (t.ex. LABB-GRUPP)</p>
            <img src={labPic2} width="75%" />
            <p><em>Screenshot 2: Grupp kopplad till compliance policy</em></p>
            <p>
              Syfte: Genom gruppbaserad tilldelning säkerställs skalbarhet och struktur.
              Policyn följer användarens gruppmedlemskap, vilket gör modellen konsekvent och enkel att förvalta.
            </p>
          </div>

          <div class="lab-subsection">
            <h4>3. Conditional Access-policy – Require compliant device</h4>
            <p>Navigering: <strong>Entra ID → Protection → Conditional Access → Create Policy</strong></p>
            <p>Konfiguration:</p>
            <ul>
              <li>Assignments → Testgruppen</li>
              <li>Cloud apps → All cloud apps</li>
              <li>Grant control → Require compliant device</li>
              <li>Policy mode → Report-only</li>
            </ul>
            <img src={labPic3} width="75%" />
            <p><em>Screenshot 3: Grant control – Require compliant device + Report-only</em></p>
            <p>
              Syfte: Här kopplas enhetens compliance-status till åtkomstbeslutet.
              Conditional Access utvärderar om enheten uppfyller Intunes krav innan åtkomst beviljas.
              Report-only används för att analysera policyns effekt innan enforcement.
            </p>
          </div>

          <div class="lab-subsection">
            <h4>4. Scope och Assignments</h4>
            <p>I Assignments-vyn definierades:</p>
            <ul>
              <li>Users/Groups → Testgruppen</li>
              <li>Cloud apps → All cloud apps</li>
            </ul>
            <img src={labPic4} width="75%" />
            <p><em>Screenshot 4: Assignments-översikt</em></p>
            <p>
              Syfte: Detta steg definierar policyns räckvidd.
              Scope är avgörande – felaktigt definierad scope kan lämna säkerhetshål eller orsaka oavsiktlig blockering.
            </p>
          </div>

          <div class="lab-subsection">
            <h4>5. Monitorering – Compliance och Sign-in logs</h4>
            <p>Navigering:</p>
            <ul>
              <li>Intune → Devices → Monitor → Compliance status</li>
              <li>Entra ID → Sign-in logs → Conditional Access-fliken</li>
            </ul>
            <img src={labPic5} width="75%" />
            <img src={labPic6} width="75%" />
            <p><em>Screenshot 5: Compliance status + Conditional Access-resultat</em></p>
            <p>Här analyseras:</p>
            <ul>
              <li>Device compliance status</li>
              <li>Hur Conditional Access utvärderar inloggningen</li>
              <li>Vilka policys som matchar</li>
              <li>Resultat (Success / Failure / Report-only impact)</li>
            </ul>
            <p>
              Syfte: Detta är den operativa delen – här verifieras hur policyn fungerar i praktiken
              och hur åtkomstbeslut fattas.
            </p>
          </div>
        </div>

        <div class="lab-section">
          <h3>Tekniskt flöde</h3>
          <ul>
            <li>Användare initierar inloggning</li>
            <li>Enhetens compliance-status skickas till Entra ID</li>
            <li>Conditional Access utvärderar användare, applikation och device state</li>
            <li>Grant control kontrollerar om kraven uppfylls</li>
            <li>Åtkomst beviljas eller blockeras</li>
          </ul>
          <p>
            Detta visar sambandet mellan: <strong>User → Device → Compliance → Conditional Access → Access Decision</strong>
          </p>
        </div>

        <div class="lab-section">
          <h3>Riskanalys</h3>
          <ul>
            <li>Att kräva compliant device utan korrekt gruppstruktur</li>
            <li>Att applicera policyn på “All users” utan testning</li>
            <li>Att inte analysera effekten i sign-in logs</li>
            <li>Att kombinera flera CA-policys utan tydlig prioritering</li>
          </ul>
          <p>
            Conditional Access i kombination med Intune är kraftfullt, men kräver noggrann design och testning.
          </p>
        </div>

        <div class="lab-section">
          <h3>Reflektion</h3>
          <p>
            Den här labben visar hur Intune och Entra ID samverkar för att skapa en modern Zero Trust-modell
            där åtkomst baseras på både identitet och enhetens säkerhetsstatus.
          </p>
          <p>
            Genom att definiera tydliga compliance-krav, arbeta gruppbaserat, koppla compliance till Conditional Access
            och analysera resultat i sign-in logs skapas en strukturerad och säker åtkomstmodell.
          </p>
          <p>
            Detta är en central del av Modern Workplace-arkitektur och en viktig komponent i Microsoft 365-säkerhet.
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

export default Labb4;
