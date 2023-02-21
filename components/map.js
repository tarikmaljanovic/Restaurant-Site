import React from 'react';
import { useRouter } from 'next/router';

export default function Map(props) {
  const address=props.profile.address;

  return (
    <div className='map_desktop  map'>
      <iframe src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder='0' allowfullscreen='' width="600" height="450"  aria-hidden='false' tabindex='0' async defer/>
    </div>
  );
}