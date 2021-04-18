import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HomePageView from '../views/HomePageView.jsx';
import LayoutComponent from '../components/layout';

const HomePage = () => {
  return (
    <LayoutComponent title="Home">
      <HomePageView />
    </LayoutComponent>
  )
}

export default HomePage;