import React, { useEffect, useState } from 'react';
import { Box } from 'styled-minimal';
import { useHistory, useParams } from 'react-router-dom';
import { useShallowEqualSelector } from 'modules/hooks';
import { List } from 'types/common';
import { Avatar, Button, Details, ImgContainerDetails, InfoContainer, ListItemContainerDetils } from 'styles/listStyles';
var randomColor = require('randomcolor');

function ListDetails() {
  const history = useHistory()
  const { id } = useParams<any>();
  const [item, setItem] = useState<null | List>(null)
  const { data } = useShallowEqualSelector(({ list }) => ({
    data: list.list || []
  }));
  
  useEffect(() => {
      const selected = data.filter((item) => item.id === id)
      setItem(selected[0])
  }, [data])

  return (
    <Box>
      <Button onClick={() => history.goBack()}>Back</Button>
      { item && 
      <ListItemContainerDetils>
        <ImgContainerDetails rndColor={randomColor()}>
          <Avatar>
            {item.title.slice(0,2,).toUpperCase()}
          </Avatar>
        </ImgContainerDetails>
        <InfoContainer>
          {item.title}
        </InfoContainer>
        <Details>
          {item.data.split(". ").map((d) => {
            return (<React.Fragment key={d}>{d}. <br/><br/></React.Fragment>)
          })}
        </Details>
      </ListItemContainerDetils>
      }
    </Box>
  );
}

export default ListDetails;
