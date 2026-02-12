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
         id="aboutMe"
         sx={{
           background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)',
           minHeight: '100vh',
         }}
         justifyContent={'flex-start'}
         alignItems={'center'}
       >
         <Stack justifyContent={'flex-start'} alignItems={'center'}>
           <h3>Tenant & licensstruktur</h3>
         </Stack>
          <MainMenu />
         <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
           {/* <Typography
             sx={{ fontFamily: 'Gotu', fontSize: '28px', fontWeight: 'bold', color: 'white' }}
           >
             Frontend developer
           </Typography> */}
           {/* <FadeDiv> */}

            <h3>
              Översikt
            </h3>
             <CustomTypography>
              I den här labben har jag gått igenom grunden i Microsoft 365-tenanten: hur den är uppbyggd, hur licenser hanteras och hur adminroller är fördelade i Entra ID.
             </CustomTypography>
             <CustomTypography>
                Fokus har varit att säkerställa att strukturen är hållbar från början – eftersom allt annat (MFA, Conditional Access, Intune osv.) bygger på att tenant, licenser och roller är rätt uppsatta.
             </CustomTypography>


               <h3>
                Scenario
              </h3>

              <CustomTypography>
                
                  Jag utgick från ett vanligt driftläge:
                  Nya användare ska onboardas löpande


                  Licenser ska tilldelas strukturerat


                  Adminbehörigheter ska vara kontrollerade


                  Strukturen ska fungera även när miljön växer


                  Målet var att bedöma om grunden är stabil nog för vidare säkerhetsarbete.
             </CustomTypography>

             <h3>
                Så här gjorde jag
             </h3>
            
            <CustomTypography>
                🔹 1. Gick igenom tenant och licensöversikt
                  Jag började med att gå in i Billing → Licenses i Microsoft 365 Admin Center för att få en tydlig överblick över vilka licenser som fanns, hur många som var tilldelade och hur många som var lediga.
                  Här ville jag snabbt förstå:
                  Vilka SKU:er används i miljön? Finns det oanvända eller överflödiga licenser? Ser tilldelningen strukturerad ut?
             </CustomTypography>

            📸 Screenshot 1:
 Billing → Licenses (översikt)

            <CustomTypography>
                🔹 2. Arbetade med gruppbaserad licenstilldelning
             </CustomTypography>

              <CustomTypography>
                Därefter gick jag in i Entra ID → Groups och kontrollerade om licenser tilldelades direkt på användare eller via grupper.

             </CustomTypography>

             <CustomTypography>
                För att testa flödet skapade jag en testgrupp med tilldelad licens och lade till en användare för att verifiera att licensen automatiskt tilldelades via gruppmedlemskap.
                Det gav en tydlig bild av hur onboarding kan förenklas och standardiseras.
                Jag föredrar gruppbaserad licensiering eftersom det:
                
             </CustomTypography>

             <CustomTypography>
                Automatiserar onboarding
             </CustomTypography>


              <CustomTypography>
                Minskar manuella fel
             </CustomTypography>
             
              <CustomTypography>
                Skapar tydlig koppling mellan roll och funktion
             </CustomTypography>


              📸 Screenshot 2:
              Entra ID → Groups → Grupp med licenstilldelning
              📸 Screenshot 3:
              License assignment-vyn för gruppen


              <CustomTypography>
                🔹 3. Granskade och analyserade adminroller
             </CustomTypography>

             <CustomTypography>
                Sedan gick jag in i Entra ID → Roles and administrators för att se hur administrativa roller var fördelade.
             </CustomTypography>

             <CustomTypography>
                Jag kontrollerade särskilt:
             </CustomTypography>

             <CustomTypography>
                Antal Global Administrators
             </CustomTypography>


<             CustomTypography>
                Om mer avgränsade roller används (User Admin, Exchange Admin, etc.)
             </CustomTypography>
             

              <CustomTypography>
                Om strukturen följer principen om least privilege
             </CustomTypography>

             <CustomTypography>
                Min utgångspunkt här var att Global Admin ska vara undantag, inte standard.
             </CustomTypography>

             
              📸 Screenshot 4:
              Global Administrator-rollen
              📸 Screenshot 5:
              Exempel på mer avgränsad adminroll


              <CustomTypography>
                Risker jag identifierade
             </CustomTypography>

             <CustomTypography>
                Under genomgången hade jag särskilt fokus på:
             </CustomTypography>


             <CustomTypography>
                För många globala administratörer
             </CustomTypography>
              
              <CustomTypography>
                Manuell licenstilldelning utan struktur
             </CustomTypography>

              
              <CustomTypography>
                Otydlig rollfördelning
             </CustomTypography>

               <CustomTypography>
                 Risk för överlicensiering
             </CustomTypography>             

              <CustomTypography>
                Det är ofta här problem uppstår längre fram – både säkerhetsmässigt och kostnadsmässigt.
             </CustomTypography>    

             <h3>
                Reflektion
             </h3>
              
              <CustomTypography>
                Den här labben är grundläggande, men också avgörande.
             </CustomTypography>

             <CustomTypography>
                Om tenantstruktur, licenshantering och adminroller inte är genomtänkta från början blir allt annat mer komplext och svårare att säkra. Många säkerhetsproblem i M365-miljöer handlar egentligen om för breda rättigheter eller otydlig struktur.
             </CustomTypography>
              
              <CustomTypography>
                Det här är exakt den typen av genomgång jag skulle vilja göra i en ny miljö innan jag börjar arbeta med säkerhet, MFA eller Conditional Access.
             </CustomTypography>
              
                            


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
