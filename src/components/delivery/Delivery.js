import React from 'react'
import { Restaurant } from '../../config/Restaurant'
import Filters from '../common/filter/Filters'

import DeliveryColletions from './DeliveryColletions'
import TopBrands from './TopBrands'
import { DeliveryFilters } from './DeliveryConFig'
import ExploreSection from '../common/exploreSection/ExploreSection'
const restaurantsList = Restaurant;

const Delivery = () => {
  return (
    <>
        <div class="max-width">
            <Filters filterList={DeliveryFilters} />
        </div>
        <DeliveryColletions/>
        <TopBrands/>
        <ExploreSection restaurants={restaurantsList} collectionName="Delivery Restaurants in Bangalore" />
    </>
  )
}

export default Delivery;