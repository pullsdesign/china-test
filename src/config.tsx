const { protocol, hostname } = window.location;

export default {
  APi: `${protocol}//${hostname}:3001`,
  SERVER_STATIC_PATH: '/public',
  PUBLIC_IMGS_URL: `${protocol}//${hostname}:3001/public/imgs/`
};
