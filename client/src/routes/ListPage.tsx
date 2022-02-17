import React from 'react';
import { Box, Container } from 'styled-minimal';
import ListContainer from 'containers/List';
function ListPage() {
  return (
    <Box>
      <Container ySpacing>
        <ListContainer />
      </Container>
    </Box>
  );
}

export default ListPage;
