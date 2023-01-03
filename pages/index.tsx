
import { Box, Icon, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
const ComingSoon = () => {
  return (
    <Container sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
      <Box sx={{display:'flex',mt:'20vh',alignItems:'center' }} >
          <Image src='/Logo.png' height={27} width={27} alt='logo' />
          <Typography variant='h4'sx={{fontWeight:'bold',color:'teal',ml:'10px'} } >
              Qupinion
          </Typography>
      </Box>
     <Image src={"/coming soon.jpg"} alt={""} width={300} height={250} />
      <Typography textAlign={'center'} color={'GrayText'} >
        We are very excited to announce the upcoming launch of <strong style={{color:'teal'}} >Qupinion</strong> , a
        revolutionary way to get real-time answers to your academic question from scholars all over the world.
      </Typography>
      
      <Typography textAlign={'center'}mt={2} color={'GrayText'}  >
        Stay tuned for more updates and be sure to follow us on social media for
        the latest news. 
      </Typography>
      <Typography textAlign={'center'} mt={2} color={'teal'} fontWeight={'600'} >
        Thanks for your interest in Qupinion!
      </Typography>
    </Container>
  );
};

export default ComingSoon;