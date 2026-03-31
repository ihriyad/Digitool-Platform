import React from 'react';

const FooterBottom = () => {
    return (
           <div className="footer-bottom grid grid-cols-1 md:grid-cols-2 mt-6">
        <p className='text-[14px] md:text-[16px]'>© 2026 Digitools. All rights reserved.</p>
        <div>
          <ul className="flex text-[10px] md:text-[14px] gap-4 justify-baseline mt-3">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service </a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default FooterBottom;