import { useEffect } from "react"
import appClient from "./api/appClient"

function App() {

  useEffect(() => {
    appClient.anime.getAnimeRecommendations({ id: 1 }).then(data => console.log(data))
  }, [])
  return (
    <>
      test
    </>
  )
}

export default App
