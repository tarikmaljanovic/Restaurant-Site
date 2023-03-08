import React from 'react';

export default function Map() {
  return (
    <div className='map_desktop  map'>
      <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92005.5076554554!2d18.312951669796544!3d43.89370191133138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cbb1ed719bd1%3A0x562ecda6de87b33e!2sSarajevo!5e0!3m2!1sen!2sba!4v1678275057527!5m2!1sen!2sba`} frameborder='0' allowfullscreen='' width="600" height="450"  aria-hidden='false' tabindex='0' async defer/>
    </div>
  );
}