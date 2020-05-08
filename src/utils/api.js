export const fetchArrayTvshows = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}tvshows`, { mode: 'cors' })
    const data = await response.json()
    return data
  } catch {
    return { Response: 'False' }
  }
}

export const fetchTvShow = async ({ search }) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}findtvshow?search=${search}`, { mode: 'cors' })
    const data = await response.json()
    return data
  } catch {
    return { Response: 'False' }
  }
}

export const getSuggestions = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}getsuggestions`, { mode: 'cors' })
    const data = await response.json()
    return data
  } catch {
    return { Response: 'False' }
  }
}