// Web Works
self.onmessage = ({ data: { question } }) => {
    console.log(question)
    self.postMessage({
        answer: 42,
    })
}
