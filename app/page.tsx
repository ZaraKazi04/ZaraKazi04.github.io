"use client"
import React, { useRef }  from 'react';
import Image from 'next/image'
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import pfp from '../public/pfp1.png';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';
import makeStyles from '@mui/material';

export default function Home() {
  const sec2Ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  return (
    <Box id="page-container" sx={{ padding: '20px' }}>
      <Box id="hero" sx={{ height: 'calc(100vh - 40px)', width: '100%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '24px', marginBottom: '20px', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            borderRadius: '24px',
            backgroundColor: "#e5e5f7",
            opacity: "0.6",
            backgroundImage: "radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
            backgroundPosition: "0 0,10px 10px"
          }}
        />
        <Box sx={{flexGrow: 1}}/>
        <Avatar alt="Zara Kazi" src={pfp.src} sx={{ height: '200px', width: '200px', border: '4px solid purple' }} />
        <Typography sx={{ color: 'black', fontSize: '48px', fontFamily: "Poppins, sans-serif" }}>
          <span style={{ color: 'purple', fontWeight: '600'}}>Zara</span> Kazi
        </Typography>
        <Typography sx={{ fontSize: {xs: '20px', md: '24px'}, textAlign: 'center' }}>
          Computer Science @ Queen&apos;s University
        </Typography>
        <Box id="buttons" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
          <Tooltip title="Resume">
            <IconButton target="_blank" href="/resume.pdf" sx={{ backgroundColor: '#e7e7e7', padding: "15px", marginRight: '15px' }}>
              <DescriptionIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton target="_blank" href="https://www.linkedin.com/in/zarakazi/" sx={{ backgroundColor: '#e7e7e7', padding: "15px", marginRight: '15px' }}>
              <LinkedInIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton target="_blank" href="https://github.com/ZaraKazi04" sx={{ backgroundColor: '#e7e7e7', padding: "15px", marginRight: '15px' }}>
              <GitHubIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton target="_blank" href="mailto:22wks2@queensu.ca" sx={{ backgroundColor: '#e7e7e7', padding: "15px" }}>
              <EmailIcon/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{flexGrow: 1}}/>
        <Box id="scroll" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton
          id="scroll-down"
          sx={{ backgroundColor: '#e7e7e7', marginBottom: '20px' }}
          onClick={() => {
            if (sec2Ref.current) {
              sec2Ref.current.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <KeyboardArrowDownIcon sx={{ color: 'purple' }} />
        </IconButton>
        </Box>
      </Box>
      <Box id="sec2" ref={sec2Ref} sx={{ width: '100%', backgroundColor: '#f7f7f7', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: {xs: '20px', md: '40px'} }}>
        <Typography sx={{ fontSize: {xs: '48px', md: '60px'}, width: '100%', textAlign: 'center', marginBottom: '20px', fontFamily: "Poppins, sans-serif", marginTop: {xs: '20px', md: '0px'} }}>
          <span style={{color: 'purple', fontWeight: '600'}}>About</span> Me
        </Typography>
        <Box sx={{ backgroundColor: '#e7e7e7', borderRadius: '24px', padding: '40px', fontFamily: "Lato, sans-serif" }}>
          <Typography sx={{ fontSize: '20px', color: '#6a6a6a' }}>
            Hi, my name is Zara! I&apos;m a first year student at Queen&apos;s University, currently studying Computer Science with a specialization in Cognitive Sciences. 
            Outside of school, I play Tennis at a competitive level and enjoy spending my free time on the court. 
            I&apos;m also a big fan of music, often snobbing over the latest releases from my favourite artists or scouring through my dads archive of vintage vinyls!
            I am driven by projects that elevate the lives of mankind and focus on fostering change in my local and global community.
            
          </Typography>
        </Box>
      </Box>
      <Box id="sec3" sx={{ width: '100%', backgroundColor: '#f7f7f7', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: {xs: '20px', md: '40px'}, marginTop: '20px' }}>
        <Typography sx={{ fontSize: {xs: '48px', md: '60px'}, width: '100%', textAlign: 'center', marginBottom: '20px', fontFamily: "Poppins, sans-serif", marginTop: {xs: '20px', md: '0px'}  }}>
          My <span style={{color: 'purple', fontWeight: '600'}}>Projects</span>
        </Typography>

        <Box id="project" sx={{ backgroundColor: '#e7e7e7', borderRadius: '24px', padding: '40px', fontFamily: "Lato, sans-serif", display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'top'}, justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
          <Box sx={{ height: '200px', width: '200px', backgroundColor: 'grey', borderRadius: '24px' }} component="img" src="/p2.png">
          </Box>
          <Box sx={{marginLeft: {xs: '0px', md: '40px'}, width: {xs: '100%', md: 'calc(100% - 220px)'} }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: {xs: 'center', md: 'space-between'}}}>
              <Typography sx={{ fontSize: '24px', fontFamily: "Poppins, sans-serif", marginBottom: '10px', marginTop: {xs: "20px", md: '0px'} }}>
                MyShoppingList
              </Typography>
              <Typography sx={{ fontSize: {xs: '16px', md:'24px'}, fontFamily: "Poppins, sans-serif", marginBottom: '10px', color: '#6a6a6a' }}>
                <Typography component="a" href="https://my-shopping-list-three.vercel.app/" sx={{ color: "#6a6a6a", textDecoration: 'none', "&:hover": {color: 'purple'}, fontSize: {xs: '16px', md:'24px'}, fontFamily: "Poppins, sans-serif", cursor: 'pointer' }}>my-shopping-list-three.vercel.app</Typography> | December 2023
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '20px', color: '#6a6a6a', textAlign: {xs: 'center', md: "left"} }}>
              This was my first attempt at learning how to leverage <b>React Hooks</b> in a development project. I created a tool that allows users to create their shopping list and keep track of their items while shopping. This web app was built using <b>React</b> and <b>JavaScript</b>,
              and had a fully custom-made front end in pure <b>CSS</b>. To host this site, I am using <b>Vercel</b> as it makes developments and maintaince a breeze!
              This project is one of my first experiments with the intricacies of React, enabling me to not only learn a lot about this framework, but create a tool to showcase my learning!
            </Typography>
          </Box>
        </Box>

        <Box id="project" sx={{ backgroundColor: '#e7e7e7', borderRadius: '24px', padding: '40px', fontFamily: "Lato, sans-serif", display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'top'}, justifyContent: 'flex-start', width: '100%' }}>
          <Box sx={{ height: '200px', width: '200px', backgroundColor: 'grey', borderRadius: '24px' }} component="img" src="/p1.png">
          </Box>
          <Box sx={{marginLeft: {xs: '0px', md: '40px'}, width: {xs: '100%', md: 'calc(100% - 220px)'} }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: {xs: 'center', md: 'space-between'}}}>
              <Typography sx={{ fontSize: '24px', fontFamily: "Poppins, sans-serif", marginBottom: '10px', marginTop: {xs: "20px", md: '0px'} }}>
                Personal Website
              </Typography>
              <Typography sx={{ fontSize: {xs: '16px', md:'24px'}, fontFamily: "Poppins, sans-serif", marginBottom: '10px', color: '#6a6a6a' }}>
                <Typography component="a" href="https://www.zarakazi.ca/" sx={{ color: "#6a6a6a", textDecoration: 'none', "&:hover": {color: 'purple'}, fontSize: {xs: '16px', md:'24px'}, fontFamily: "Poppins, sans-serif", cursor: 'pointer' }}>zarakazi.ca</Typography> | August 2023
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '20px', color: '#6a6a6a', textAlign: {xs: 'center', md: "left"} }}>
              This was my first web development project I undertook, creating the site you&apos;re currently on! I built this website using <b>NextJS</b> and <b>Typescript</b>,
              leveraging <b>Material UI</b> for my component library and applying custom styling overtop of the design library. To host this site, I am using <b>Vercel</b> as it integrates nicely with the front-end framework. 
              This project is my first venture into web application design and it enabled me to not only learn a ton, but create a platform to showcase my work!
            </Typography>
          </Box>
        </Box>
        
      </Box>
      <Box id="sec4" sx={{ width: '100%', backgroundColor: '#f7f7f7', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: {xs: '20px', md: '40px'}, marginTop: '20px' }}>
        <Typography sx={{ fontSize: {xs: '48px', md: '60px'}, width: '100%', textAlign: 'center', marginBottom: '20px', fontFamily: "Poppins, sans-serif", marginTop: {xs: '20px', md: '0px'}  }}>
          <span style={{color: 'purple', fontWeight: '600'}}>Contact</span> Me
        </Typography>
        <Box sx={{ backgroundColor: '#e7e7e7', borderRadius: '24px', padding: '40px', fontFamily: "Lato, sans-serif", width: '100%' }}>
          <Typography sx={{ fontSize: '20px', color: '#6a6a6a', textAlign: 'left' }}>
            Thanks for taking a look through my website! If you&apos;d like to see more, take a look at my resume. If you&apos;d like to connect, feel free to send me an email or a message on LinkedIn!
          </Typography>
          <Box id="buttons" sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'stretch', justifyContent: {xs: 'center', md: 'space-between'}, marginTop: '15px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'white', borderRadius: '10px', height: '100px', marginRight: '15px', color: "#6a6a6a", cursor: "pointer", "&:hover": {color: 'purple'} }}>
              <Typography sx={{ fontSize: {xs: '18px', md: '24px'}, textAlign: 'center', fontFamily: "Poppins, sans-serif", fontWeight: '700'}}>
                22WKS2@queensu.ca
              </Typography>
            </Box>
            <Box sx={{ display: {xs: 'none',md: 'flex'}, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: {xs: '10px', md: '0px'} }}>
              <Tooltip title="LinkedIn">
                <IconButton target="_blank" href="https://www.linkedin.com/in/zarakazi/" sx={{ backgroundColor: '#d7d7d7', padding: "15px", marginRight: {xs: '10px', md: '15px'}, borderRadius: '10px', height: '100px', width: '100px' }}>
                  <LinkedInIcon sx={{ fontSize: '36px' }}/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Resume">
                <IconButton target="_blank" href="/resume.pdf" sx={{ backgroundColor: '#d7d7d7', padding: "15px", borderRadius: '10px', height: '100px', width: '100px' }}>
                  <DescriptionIcon sx={{ fontSize: '36px' }}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
