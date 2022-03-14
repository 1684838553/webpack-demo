const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
  question: 'hi，那边的workder线程，请告诉我今天的幸运数字是多少？'
})

worker.onmessage = (message) => {
  console.log(message.data.answer)
}