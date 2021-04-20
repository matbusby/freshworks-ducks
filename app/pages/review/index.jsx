import LayoutComponent from '../../components/layout';
import NewFeedingView from '../../views/NewFeedingView';
import ReviewFeedingsView from '../../views/ReviewFeedingsView';

const ReviewFeedingsPage = () => {
  return (
    <LayoutComponent title="Review The Duck Feedings">
      <ReviewFeedingsView />
    </LayoutComponent>
  )
}

export default ReviewFeedingsPage;