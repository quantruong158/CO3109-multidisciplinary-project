async function addUser(data: URLSearchParams) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  })
  const responseData = await res.json()
  return responseData
}

async function getAccountData(data: URLSearchParams) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  })
  const responseData = await res.json()
  return responseData
}

export const accountRepository = {
  addUser,
  getAccountData,
}
