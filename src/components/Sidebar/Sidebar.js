import React from 'react';
import CurrenciesToogle from '../../containers/CurrenciesToogle/CurrenciesToogle';
import TicketsFilter from '../../containers/TicketsFilter/TicketsFilter';

const Sidebar = () => {
  return (
    <div>
      <CurrenciesToogle />
      <TicketsFilter />
    </div>
  );
};

export default Sidebar;
