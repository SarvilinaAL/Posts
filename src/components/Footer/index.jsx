import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
            <BottomNavigationAction label="Telegram" icon={<TelegramIcon />} />
            <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon />} />
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        </BottomNavigation>
    );
};