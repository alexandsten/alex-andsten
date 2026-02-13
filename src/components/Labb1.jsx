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

const Labb1 = () => {

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
           <h1>Tenant & licensstruktur</h1>
         </Stack>
          <MainMenu />
         <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
           {/* <Typography
             sx={{ fontFamily: 'Gotu', fontSize: '28px', fontWeight: 'bold', color: 'white' }}
           >
             Frontend developer
           </Typography> */}
           {/* <FadeDiv> */}
            <h2>Labb 1 – Tenant, licenser och admin-struktur</h2>
           <div class="lab-section">
            <h3>Översikt</h3>
            <p>
              I den här labben har jag gått igenom grunden i Microsoft 365-tenanten: hur den är uppbyggd,
              hur licenser hanteras och hur adminroller är fördelade i Entra ID.
            </p>
            <p>
              Fokus har varit att säkerställa att strukturen är hållbar från början – eftersom allt annat
              (MFA, Conditional Access, Intune osv.) bygger på att tenant, licenser och roller är rätt uppsatta.
            </p>
          </div>

          <div class="lab-section">
            <h3>Scenario</h3>
            <p>Jag utgick från ett vanligt driftläge:</p>
            <ul>
              <li>Nya användare ska onboardas löpande</li>
              <li>Licenser ska tilldelas strukturerat</li>
              <li>Adminbehörigheter ska vara kontrollerade</li>
              <li>Strukturen ska fungera även när miljön växer</li>
            </ul>
            <p>
              Målet var att bedöma om grunden är stabil nog för vidare säkerhetsarbete.
            </p>
          </div>

          <div class="lab-section">
            <h3>Så här gjorde jag</h3>

            <div class="lab-subsection">
              <h4>1. Gick igenom tenant och licensöversikt</h4>
              <p>
                Jag började med att gå in i <strong>Billing → Licenses</strong> i Microsoft 365 Admin Center
                för att få en tydlig överblick över vilka licenser som fanns, hur många som var tilldelade
                och hur många som var lediga.
              </p>
              <p>Här ville jag snabbt förstå:</p>
              <ul>
                <li>Vilka SKU:er används i miljön?</li>
                <li>Finns det oanvända eller överflödiga licenser?</li>
                <li>Ser tilldelningen strukturerad ut?</li>
              </ul>
              <img src="/src/img/labb1/labb1-bild1.png" width="75%" />
              <p><em>Screenshot 1: Billing → Licenses (översikt)</em></p>
            </div>

            <div class="lab-subsection">
              <h4>2. Gruppbaserad licenstilldelning</h4>
              <p>
                Därefter gick jag in i <strong>Entra ID → Groups</strong> och kontrollerade om licenser
                tilldelades direkt på användare eller via grupper.
              </p>
              <p>
                För att testa flödet skapade jag en testgrupp med tilldelad licens och lade till en användare
                för att verifiera att licensen automatiskt tilldelades via gruppmedlemskap.
              </p>
              <p>Jag föredrar gruppbaserad licensiering eftersom det:</p>
              <ul>
                <li>Automatiserar onboarding</li>
                <li>Minskar manuella fel</li>
                <li>Skapar tydlig koppling mellan roll och funktion</li>
              </ul>
              <img src="/src/img/labb1/labb1-bild2.png" width="75%" />
              <p><em>Screenshot 2: Entra ID → Groups → Grupp med licenstilldelning</em></p>
              <img src="/src/img/labb1/labb1-bild6.png" width="75%" />
              <p><em>Screenshot 3: License assignment-vyn för gruppen</em></p>
            </div>

            <div class="lab-subsection">
              <h4>3. Granskade och analyserade adminroller</h4>
              <p>
                Jag gick in i <strong>Entra ID → Roles and administrators</strong> för att se hur
                administrativa roller var fördelade.
              </p>
              <p>Jag kontrollerade särskilt:</p>
              <ul>
                <li>Antal Global Administrators</li>
                <li>Om mer avgränsade roller används (User Admin, Exchange Admin, etc.)</li>
                <li>Om strukturen följer principen om least privilege</li>
              </ul>
              <p>
                Min utgångspunkt här var att Global Admin ska vara undantag, inte standard.
              </p>
              <img src="/src/img/labb2/labb2-bild7.png" width="75%" />
              <p><em>Screenshot 4: Global Administrator-rollen</em></p>
              <img src="/src/img/labb1/labb1-bild16.png" width="75%" />
              <p><em>Screenshot 5: Exempel på mer avgränsad adminroll</em></p>
            </div>
          </div>

          <div class="lab-section">
            <h3>Risker jag identifierade</h3>
            <ul>
              <li>För många globala administratörer</li>
              <li>Manuell licenstilldelning utan struktur</li>
              <li>Otydlig rollfördelning</li>
              <li>Risk för överlicensiering</li>
            </ul>
            <p>
              Det är ofta här problem uppstår längre fram – både säkerhetsmässigt och kostnadsmässigt.
            </p>
          </div>

          <div class="lab-section">
            <h3>Reflektion</h3>
            <p>
              Den här labben är grundläggande, men också avgörande.
              Om tenantstruktur, licenshantering och adminroller inte är genomtänkta från början
              blir allt annat mer komplext och svårare att säkra.
            </p>
            <p>
              Många säkerhetsproblem i M365-miljöer handlar egentligen om för breda rättigheter
              eller otydlig struktur.
            </p>
            <p>
              Det här är exakt den typen av genomgång jag skulle vilja göra i en ny miljö innan
              jag börjar arbeta med säkerhet, MFA eller Conditional Access.
            </p>
          </div>
                        
                            


             <CustomTypography sx={{ fontFamily: 'Gotu', color: 'white', fontSize: '14px'  }}>
               Feel free to explore my work and learn more about what I do!
             </CustomTypography>
           {/* </FadeDiv> */}
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

export default Labb1;
