import LayoutComponent from "../../components/layout";
import NewFeedingView from "../../views/NewFeedingView";
import { ToastProvider } from "react-toast-notifications";

const RecordFeedingPage = () => {
  return (
    <LayoutComponent title="Register a New Feeding">
      <ToastProvider autoDismiss={true} placement="bottom-center">
        <NewFeedingView />
      </ToastProvider>
    </LayoutComponent>
  );
};

export default RecordFeedingPage;
