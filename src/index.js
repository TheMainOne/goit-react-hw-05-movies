import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
// <Suspense fallback="">/
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="movies" element={<MoviesPage />} />
//             <Route path="movies/:movieId" element={<ItemPage />}>
//               <Route path="cast" element={<ActorsInfo />} />
//               <Route path="reviews" element={<ReviewsInfo />} />
//             </Route>
//             <Route path="*" element={<Navigate to="/" />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
