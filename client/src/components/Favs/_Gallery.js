// import React, { useEffect, useState } from 'react'
// import React from 'react'
// import GIF from '../GIF'
// import styled from 'styled-components'

// const Container = styled.div`
//   display: flex;
//   flex-flow: row wrap;
// `
// // const GalleryGIF = styled(GIF)``

// const FavsGallery = () => {
//   const getSavedFavs = JSON.parse(window.localStorage.getItem('Favs'))
//   const emptyFavsMessage = `No Saved Favs Yet!`

//   if (getSavedFavs === undefined || null) {
//     return emptyFavsMessage
//   } else {
//     return getSavedFavs.map((gif, index) => {
//       return (
//         <Container key={index}>
//           <GIF gif={gif} index={index} />
//         </Container>
//       )
//     })

//   }
// }
// export default FavsGallery

// const mapFavGIFs = () => {
//   getSavedFavs.map((gif, index) => {
//     return <GIF gif={gif.gifAnimated} index={index} />
//   })
// }

// const renderGallery = () => {
//   if (getSavedFavs === undefined || null) {
//     return emptyFavsMessage
//   } else {
//     return mapFavGIFs()
//   }
// }

// return <Container>{renderGallery()} </Container>
