import React from 'react'
import { HeaderSubscription } from '../components/subscription/HeaderSubscription'
import { BodySubscriptions } from '../components/subscription/BodySubscription'

export const Subscription = () => {
  return (
    <div>
      <HeaderSubscription />
      <BodySubscriptions />
    </div>
  )
}
