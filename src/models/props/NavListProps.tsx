import React from 'react';

export interface NavListProps {
  loginModalToggle(e: React.MouseEvent): void;
  setSectionPage(section?: string): void;
}
