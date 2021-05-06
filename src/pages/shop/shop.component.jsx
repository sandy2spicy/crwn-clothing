import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route exact path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
  );
};


export default ShopPage;
