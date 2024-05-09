async function getAllFeeds() {
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds`,
    {
      cache: 'no-cache',
      headers: {
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
    },
  )
  const data = await res.json()
  return data
}

async function getLastDataFromFeed(feedKey: string) {
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/${feedKey}/data/last`,
    {
      cache: 'no-cache',
      headers: {
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
    },
  )
  const data = await res.json()
  return data
}

async function addDataToFeed(feedKey: string, value: string) {
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/${feedKey}/data`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
      body: JSON.stringify({ value }),
    },
  )
  const responseData = await res.json()
  return { ...responseData, status: res.status }
}

export const feedRepository = {
  getLastDataFromFeed,
  getAllFeeds,
  addDataToFeed,
}
