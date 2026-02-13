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
import labPic1 from '../img/labb2/labb2-bild2.png'
import labPic2 from '../img/labb2/labb2-bild6.png'
import labPic3 from '../img/labb2/labb2-bild10.png'
import labPic4 from '../img/labb2/labb2-bild9.png'
import labPic5 from '../img/labb2/labb2-bild11.png'
import ImageZoom from './ImageZoom';

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

const Labb2 = () => {

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
           <h1>Identitet & Entra ID</h1>
         </Stack>
          <MainMenu />
         <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
          <h2>Labb 2 – Användare, grupper och admin-konton</h2>
           <div class="lab-section">
            <h3>Översikt</h3>
            <p>
              I den här labben har jag arbetat med användarhantering, gruppstruktur och separering
              av administrativa konton i Entra ID.
            </p>
            <p>
              Fokus har varit att förstå hur identiteter bör struktureras i en Microsoft 365-miljö
              för att skapa tydlighet, säkerhet och en hållbar modell för både drift och åtkomststyrning.
            </p>
            <p>
              Detta är grunden för nästan allt dagligt arbete i Entra ID – onboarding, behörigheter,
              felsökning och säkerhet.
            </p>
          </div>

          <div class="lab-section">
            <h3>Scenario</h3>
            <p>Jag utgick från ett vanligt scenario:</p>
            <ul>
              <li>Nya användare ska skapas och placeras rätt direkt</li>
              <li>Åtkomst ska styras via grupper – inte manuellt</li>
              <li>Administrativa konton ska vara separerade från vanliga användarkonton</li>
              <li>Strukturen ska fungera även när organisationen växer</li>
            </ul>
            <p>
              Målet var att säkerställa att identitetsmodellen är tydlig och säker från början.
            </p>
          </div>

          <div class="lab-section">
            <h3>Så här gjorde jag</h3>

            <div class="lab-subsection">
              <h4>1. Användarkonton</h4>
              <p>
                Jag gick in i <strong>Entra ID → Users</strong> och granskade hur användarkonton var uppsatta.
              </p>
              <p>Jag kontrollerade:</p>
              <ul>
                <li>Namnstandard (UPN-format och visningsnamn)</li>
                <li>Om roller var direkt tilldelade på användare</li>
                <li>Om användare hade separata admin-konton</li>
              </ul>
              <p>
                För att testa strukturen skapade jag en testanvändare enligt en tydlig namnstandard
                och verifierade att kontot hamnade i rätt grupper för att automatiskt få korrekt åtkomst.
              </p>
              <ImageZoom src={labPic1} />
              
              <p><em>Screenshot 1: Entra ID → Users (översikt)</em></p>
              <ImageZoom src={labPic2} />
              <p><em>Screenshot 2: Användaregenskaper (roller + gruppmedlemskap)</em></p>
            </div>

            <div class="lab-subsection">
              <h4>2. Gruppstruktur</h4>
              <p>
                Jag analyserade hur grupper användes i <strong>Entra ID → Groups</strong>
                för att styra åtkomst.
              </p>
              <p>Fokus låg på:</p>
              <ul>
                <li>Skillnaden mellan Security Groups och Microsoft 365 Groups</li>
                <li>Om grupper användes för behörighet eller endast för kommunikation</li>
                <li>Tydlig och konsekvent namnsättning</li>
              </ul>
              <p>
                För att tydliggöra modellen skapade jag:
              </p>
              <ul>
                <li>En säkerhetsgrupp för rollbaserad åtkomst</li>
                <li>En testgrupp kopplad till en specifik funktion</li>
              </ul>
              <p>
                Jag lade till och tog bort användare för att verifiera hur åtkomsten förändrades
                via gruppmedlemskap.
              </p>
              <ImageZoom src={labPic3} />
              <p><em>Screenshot 3: Lista över grupper</em></p>
              <ImageZoom src={labPic4} />
              <p><em>Screenshot 4: Medlemskap i säkerhetsgrupp</em></p>
            </div>

            <div class="lab-subsection">
              <h4>3. Separering av admin-konton</h4>
              <p>
                En viktig del av labben var att säkerställa att administrativa konton inte används
                för dagligt arbete.
              </p>
              <p>Jag granskade:</p>
              <ul>
                <li>Om adminroller låg direkt på vanliga användarkonton</li>
                <li>Om separata administrativa identiteter fanns</li>
                <li>Hur roller var fördelade</li>
              </ul>
              <p>
                Syftet är att minska risken vid phishing, malware eller kompromettering av ett standardkonto.
              </p>
              <p>
                Jag identifierade ett separat administrativt konto (Break-Glass-Admin) och granskade dess rolltilldelning för att säkerställa att administrativa rättigheter inte låg på dagliga användarkonton.
                Jag noterade även att vissa vanliga användare hade Global Admin-roller,
                vilket överstiger rekommenderat antal och innebär en säkerhetsrisk.
              </p>
              <ImageZoom src={labPic5} />
              <p><em>Screenshot 5: Admin-roll kopplad till separat administrativt konto</em></p>
            </div>
          </div>

          <div class="lab-section">
            <h3>Risker jag identifierade</h3>
            <ul>
              <li>Adminroller kopplade till vanliga användarkonton</li>
              <li>Direkt tilldelade rättigheter istället för gruppbaserade</li>
              <li>Otydlig namnsättning av grupper</li>
              <li>Svåröverskådlig gruppstruktur</li>
            </ul>
            <p>
              Det är ofta här åtkomstproblem och säkerhetsrisker uppstår i praktiken.
            </p>
          </div>

          <div class="lab-section">
            <h3>Reflektion</h3>
            <p>
              Den här labben tydliggjorde hur central identitetsmodellen är i Microsoft 365.
              Om användare och grupper inte är strukturerade från början blir både felsökning
              och säkerhetsarbete betydligt svårare.
            </p>
            <p>
              Att arbeta konsekvent med gruppbaserad åtkomst, tydlig namnsättning och separata
              admin-konton skapar en miljö som är både säkrare och enklare att förvalta.
            </p>
            <p>
              Detta är den typ av genomgång jag skulle göra innan jag implementerar Conditional Access,
              MFA eller andra säkerhetskontroller – eftersom allt bygger på att identiteten är korrekt strukturerad från början.
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

export default Labb2;
