export async function getChapters() {
    const res = await fetch('https://ird-hadith-server.vercel.app/chapters')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }