import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemContainer, ImgContainer, Avatar, InfoContainer } from 'styles/listStyles';
import { List } from 'types/common';
var randomColor = require('randomcolor');


export interface ListItemProps {
  item: List;
}

function ListItem({ item }: ListItemProps) {
  return (
    <Link to={item.id.toString()}>
      <ListItemContainer>
        <ImgContainer rndColor={randomColor()}>
          <Avatar>
            {item.title.slice(0,2,).toUpperCase()}
          </Avatar>
        </ImgContainer>
        <InfoContainer>
          {item.title}
        </InfoContainer>
      </ListItemContainer>
    </Link>
  );
}

export default ListItem;
