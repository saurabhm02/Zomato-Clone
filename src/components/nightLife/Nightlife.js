import React from 'react';
import { NightFilters } from './NightlifeConfig';
import { CollectionList } from './NightlifeConfig';
import { NightLife } from '../../config/NightLife';
import Collection from '../common/collection/Collection';
import ExploreSection from '../common/exploreSection/ExploreSection';
import Filters from '../common/filter/Filters';
const nightLifeList = NightLife;



const Nightlife = () => {
  return (
    <div>
        <Collection list={CollectionList} />
      <div className="max-width">
        <Filters filterList={NightFilters} />
      </div>
      <ExploreSection
        restaurants={nightLifeList}
        collectionName="Nightlife Restaurants in Bangalore"
      />
    </div>
  )
}

export default Nightlife