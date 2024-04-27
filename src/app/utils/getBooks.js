export async function getBooks() {
    const res = await fetch('https://ird-hadith-server.vercel.app/books')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }