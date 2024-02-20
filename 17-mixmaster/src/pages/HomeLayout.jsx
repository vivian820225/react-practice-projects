import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  const value = 'demo oulet context data'

  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </div>
  )
}
export default HomeLayout
