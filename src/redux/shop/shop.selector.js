import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};

export const selectShopCollections = createSelector([selectShop], (shop) => {
  return shop.collections;
});

export const selectCollectionPreview = createSelector([selectShopCollections], (collections) => {
  return Object.keys(collections).map((key) => {
    return collections[key]
  });
});

export const selectShopCollection = (categoryUrlParam) => {
  return createSelector([selectShopCollections], (collections) => {
    return collections[categoryUrlParam];
  });
};
