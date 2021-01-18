function regSw() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js', { scope: '/' })
      .then((reg) => console.log('Register Success'))
      .catch((err) => console.error('Error : ', err));
  } else {
    console.log('Browser Not Support Service Worker');
  }
}

export { regSw };
