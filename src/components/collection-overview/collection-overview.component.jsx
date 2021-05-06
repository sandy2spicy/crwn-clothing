import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionData }) => {
        return <CollectionPreview key={id} {...otherCollectionData} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview,
});
  

export default connect(mapStateToProps)(CollectionOverview);
