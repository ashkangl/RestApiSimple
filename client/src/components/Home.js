import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Posts from './Posts/Posts'
import Images from './Images/Image'
import MetaTags from 'react-meta-tags';


const Home = () => {
  return (
    <Container maxWidth="md">
    <div className="wrapper">
        <MetaTags>
          <title>Project for github | Get, Post, Delete node js rest api, react js</title>
          <meta name="description" content="Project for github | Get, Post, Delete node js rest api, react js"/>
          </MetaTags>
      </div>
    <Typography variant="h2" color="initial" marginBottom='10%' width='100%' textAlign='center'>GET, POST & DELETE</Typography>
      <Grid item container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
        <Grid item container spacing={1} xs={12} xl={5} md={5} lg={5} sm={12} style={{marginBottom:'50px'}}>
          <Typography variant="h4" color="initial" gutterBottom marginBottom='10px' width='100%' textAlign='center'>POSTS</Typography>
          <Posts />
        </Grid>
        <Grid item container spacing={1} xs={12} xl={2} md={2} lg={2} sm={12}>
        </Grid>
        <Grid item container spacing={1} xs={12} xl={5} md={5} lg={5} sm={12}>
          <Typography variant="h4" color="initial" gutterBottom marginBottom='10px' width='100%' textAlign='center'>Images</Typography>
          <Images />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home