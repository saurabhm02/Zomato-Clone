import React from 'react'
import { DiningFilters } from './DiningConfig'
import { CollectionList } from './DiningConfig'
import { Dining } from '../../config/Dining'
import Collection from '../common/collection/Collection'
import ExploreSection from '../common/exploreSection/ExploreSection'
import Filters from '../common/filter/Filters'





const DiningOut = () => {
  return (
    <div>
        <Collection list={CollectionList} />
        <div className="max-width">
            <Filters filterList={DiningFilters}/>
        </div>

        <ExploreSection restaurants={Dining} collectionName="Dine-Out Restaurants in Bangalore" />
    </div>
  )
  
}

export default DiningOut;