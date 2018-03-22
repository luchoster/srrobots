import React from 'react'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <HomePageTemplate
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      intro={{ blurbs }}
      slider={{
        image1: {
          image: getAsset(entry.getIn(['data', 'hero', 'image1', 'image'])),
          alt: entry.getIn(['data', 'hero', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'hero', 'image2', 'image'])),
          alt: entry.getIn(['data', 'hero', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'hero', 'image3', 'image'])),
          alt: entry.getIn(['data', 'hero', 'image3', 'alt']),
        },
      }}
    />
  )
}

export default HomePagePreview
