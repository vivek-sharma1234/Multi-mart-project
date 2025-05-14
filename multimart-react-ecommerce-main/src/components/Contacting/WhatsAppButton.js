import React from 'react';

const WhatsAppButton = () => {
  const whatsappGroupLink = 'https://chat.whatsapp.com/E9WlSWfHVle3xeOUnNtSMU';

  const openWhatsAppGroup = () => {
    window.open(whatsappGroupLink);
  };

  return (
    <div className='imagecontacting'>
      <img
        src="https://w7.pngwing.com/pngs/645/890/png-transparent-computer-icons-logo-whatsapp-whatsapp-text-logo-whatsapp-icon-thumbnail.png" // Replace with your WhatsApp logo image
        alt="WhatsApp Logo"
        onClick={openWhatsAppGroup}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default WhatsAppButton;
