import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: 'j55foi8o3vpc',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState(true)

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const id = item.sys.id
        const { title, url, image } = item.fields
        const img = image?.fields?.file?.url
        return { id, title, url, img }
      })
      setProjects(projects)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { isLoading, projects }
}
