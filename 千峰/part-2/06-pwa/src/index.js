console.log('hello webpack')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then( registration => {
        console.log('SW 注册成功：', registration)
      })
      .catch( registrationError => {
        console.log('SW 注册失败：', registrationError)
      })
  })
}