import React from 'react'
import { Paper, Grid, Box, Avatar } from '@mui/material'

function ViewQuerySection() {
  return (
    <div>
      <Box style={{ margin: "40px 20px" }}>
        <Paper style={{ padding: "40px 20px" }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
        <h2></h2>
        
      </Box>
    </div>
  )
}

export default ViewQuerySection