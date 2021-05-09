import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectShopIsFetching } from "../../redux/shop/shop.selector";
import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectShopIsFetching
})

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverviewComponent));
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;