import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectShopIsCollectionsAvailable } from "../../redux/shop/shop.selector";
import CollectionPage from "./collection.component";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectShopIsCollectionsAvailable(state)
})

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverviewComponent));
const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer;