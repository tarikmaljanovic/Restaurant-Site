import axios from "axios";

export async function getGallery(ctx = null) {
    const res = await fetch(
      `https://app.guestro.se/api/profiles/280/galleries/`
    );
    const data = await res.json();
    return data.data;
  }

  export async function getProfile(ctx = null) {
    const res = await fetch(
      `https://app.guestro.se/api/profiles/280?website=true&custom-working-locked`
    );
    const data = await res.json();
    return data.data;
  }
  
  export async function getMenu(ctx = null) {
    const res = await fetch(
      `https://app.guestro.se/api/profiles/280/menus/`
    );
    const data = await res.json();
    return data.data;
  }
  
  export async function getEvents(ctx = null) {
    const res = await fetch(
      `https://app.guestro.se/api/profiles/280/events/`
    );
    const data = await res.json();
    return data.data;
  }