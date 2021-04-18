import HomePageView from '../views/HomePageView';
import LayoutComponent from '../components/layout';

const HomePage = () => {
  return (
    <LayoutComponent title="Home">
      <HomePageView />
    </LayoutComponent>
  )
}

export default HomePage;