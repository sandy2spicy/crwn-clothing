import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">{
        items.map((item) => {
           return <CollectionItem key={item.id} item={item}/>
        })
      }</div>
    </div>
  );
};

const mapStatesToProps = (state, props) => {
  return {
    collection: selectShopCollection(props.match.params.categoryId)(state),
  };
};

export default connect(mapStatesToProps)(CollectionPage);
