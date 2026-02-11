import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Avatar, IconButton, Drawer, Stack, useMediaQuery, GlobalStyles, styled as muiStyled} from '@mui/material';
// import { Menu as MenuIcon } from '@mui/icons-material';


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" />



export default function MainMenu(props) {
  
  

  const MenuText = muiStyled(Typography)({
      fontFamily: 'Gotu', 
      color: 'white', 
      fontSize: '14px',
  });

  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const isSocialScreen = useMediaQuery('(max-width:1000px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
     <>
        {/* <GlobalStyles
        styles={{
          body: {
           
            overflowX: 'hidden', // Hide overflow on x-axis
          },
          html: {
           
            overflowX: 'hidden', // Hide overflow on x-axis
          }
        }}
      /> */}
      <Grid
        container
        spacing={2}
        sx={{
          position: 'sticky',
          top: 0,
          // width: '100vw', // Set a maximum width
          maxWidth: '100vw',
          padding: '10px',
          paddingBottom: '2em',
          margin: '0px',
          // borderBottom: '3px solid #ed652b',
          paddingRight: '50px',
          zIndex: 5000,
          overflowX: 'hidden',
          // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
          // '@media (min-width: 1100px)': {
          //   maxWidth: 'calc(100% - 50px)', // Adjust width for larger screens
          // },
        }}
      >
         {/* {isSmallScreen && (
          <Grid item xs={12} sm={1} p={0.2} onClick={() => props.setSelectedItem('Home')} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', cursor: "pointer", marginTop: '-1em' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Hem
            </Link>
            
          </Grid>
        )} */}
        <Grid container item xs={12} sm={11} spacing={2} justifyContent={'flex-end'} gap={3}>
          {!isSmallScreen && (
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Grid item onClick={() => props.setSelectedItem('Home')}>
                <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' },  color: props.selectedItem == 'Home' ? '#ed652b' : 'white' }}>
                    Home
                </MenuText>
              </Grid>
            </Link>
          )}
            {!isSmallScreen && (
              <Link to="/labb1" style={{ textDecoration: 'none' }}>
                <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Prototype' ? '#ed652b' : 'white' }}>
                      Tenant & Licenshantering
                    </MenuText>
                  </Grid>
                </Link>
             )}
                {/* {!isSmallScreen && (
                  <Link to="/subscription" style={{ textDecoration: 'none' }}>
                    <Grid item onClick={() => props.setSelectedItem('Sub')}>
                      <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Sub' ? '#ed652b' : 'white' }}>
                        Subscription
                      </MenuText>
                    </Grid>
                   </Link>
                )} */}
              {!isSmallScreen && (
                <Link to="/labb2" style={{ textDecoration: 'none' }}>
                  <Grid item onClick={() => props.setSelectedItem('About')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'About' ? '#ed652b' : 'white' }}>
                      Identitet & Entra ID
                    </MenuText>
                  </Grid>
                </Link>
             )}
            {isSmallScreen && (
              <Grid  sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                marginTop: '20px', // Adjust margin as needed
                marginRight: '20px', // Adjust margin as needed
                overflowX: 'hidden',
              }} item>
                <IconButton onClick={toggleDrawer(true)} sx={{ paddingRight: '1em', marginTop: '-1.5em'}} >
                <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 512 512"><path fill="white" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/></svg>
                </IconButton>
              </Grid>
              )}
              {!isSmallScreen && (
              <Link to="/labb3" style={{ textDecoration: 'none' }}>
                <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Prototype' ? '#ed652b' : 'white' }}>
                      MFA & Conditional Access
                    </MenuText>
                  </Grid>
                </Link>
             )}
             {!isSmallScreen && (
              <Link to="/labb4" style={{ textDecoration: 'none' }}>
                <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Prototype' ? '#ed652b' : 'white' }}>
                      Intune & Device Compliance
                    </MenuText>
                  </Grid>
                </Link>
             )}
             {!isSmallScreen && (
              <Link to="/labb5" style={{ textDecoration: 'none' }}>
                <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Prototype' ? '#ed652b' : 'white' }}>
                      Adminsäkerhet & Break Glass
                    </MenuText>
                  </Grid>
                </Link>
             )}
             {!isSmallScreen && (
              <Link to="/labb6" style={{ textDecoration: 'none' }}>
                <Grid item onClick={() => props.setSelectedItem('Prototype')}>
                    <MenuText sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: props.selectedItem == 'Prototype' ? '#ed652b' : 'white' }}>
                      Dataskydd – DLP & Retention
                    </MenuText>
                  </Grid>
                </Link>
             )}
            </Grid>
          </Grid>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ zIndex: 9999 }}
          >
            <Stack role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <Grid container direction="column" spacing={2} sx={{ padding: '20px', backgroundColor: '#141414', height: '102vh', overflow: 'hidden' }}>
                <Grid item>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('Home')}
                    >
                      Home
                    </MenuText>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/labb1" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('Prototype')}
                    >
                      Tenant & Licenshantering
                    </MenuText>
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link to="/subscription" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' },color: 'white' }}
                      onClick={() => props.setSelectedItem('Sub')}
                    >
                      Subscription
                    </MenuText>
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/labb2" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('About')}
                    >
                      Identitet & Entra ID
                    </MenuText>
                </Link>
                </Grid>
                <Grid item>
                <Link to="/labb3" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('About')}
                    >
                      MFA & Conditional Access
                    </MenuText>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/labb4" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('About')}
                    >
                      Intune & Device Compliance
                    </MenuText>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/labb5" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('About')}
                    >
                      Adminsäkerhet & Break Glass
                    </MenuText>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/labb6" style={{ textDecoration: 'none' }}>
                    <MenuText
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, color: 'white' }}
                      onClick={() => props.setSelectedItem('About')}
                    >
                      Dataskydd – DLP & Retention
                    </MenuText>
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Drawer>
    </>
  );
}

    

