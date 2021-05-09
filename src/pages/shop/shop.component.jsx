import { Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container.component";
import CollectionContainer from "../collection/collection-container.component";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

const ShopPage = ({ fetchCollectionData, match }) => {
  useEffect(() => {
    fetchCollectionData();
  }, [fetchCollectionData]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionData: () => {
      dispatch(fetchCollectionStart());
    },
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
