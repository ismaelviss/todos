import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
    <ContentLoader
    viewBox="0 0 352 512"
    backgroundColor="#706e77"
    foregroundColor="#8c96e3">
        <rect x="0" y="17" rx="4" ry="4" width="352" height="72" />
        <rect x="0" y="109" rx="4" ry="4" width="352" height="72" />
        <rect x="0" y="198" rx="4" ry="4" width="352" height="72" />
    </ContentLoader>
  );
  
  export { Skeleton };