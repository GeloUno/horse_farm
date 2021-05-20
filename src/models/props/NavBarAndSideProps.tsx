import React from 'react';
import { NavListProps } from './NavListProps';


export interface NavBarAndSideProps extends NavListProps {
  sideBarToggle(e: React.MouseEvent): void;
}
