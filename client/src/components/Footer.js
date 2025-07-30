import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {

  return (
   
        <div className="footer-bottom" style={{ padding: '30px' , fontWeight:'bold', fontSize: '20em'}}>
          <p>
            Made with <Heart size={16} className="heart" /> By Uday Savaliya
          </p>
        </div>
  );
};

export default Footer;
