// ---
// import { HEADER_URL, LOGO_URL } from '../../constants/url.global';
// import { BACKEND_URL } from '../../types/global';
// import type { HeaderData } from '../../types/header';
// import api from '../../util/axios';

// const fetchHeaderData = async (): Promise<HeaderData | null> => {
//   try {
//     const response = await api.get(HEADER_URL);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching header data:', error);
//     return null;
//   }
// };

// const fetchLogoData = async () => {
//   try {
//     const response = await api.get(LOGO_URL);
//     const logoData = response.data;
//     return logoData.data.attributes.logo.data.attributes;
//   } catch (error) {
//     console.error('Error fetching logo data:', error);
//   }
// };
// const data = await fetchHeaderData();
// const logoData = await fetchLogoData();
// ---
//     <header className="bg-white py-3 px-5">
//       <div className="max-w-7xl flex justify-between items-center mx-auto">
//         <div className="flex max-h-16">
//           <img
//             className="w-8 mr-2"
//             src={BACKEND_URL + logoData.url}
//             alt="Logo"
//           />
//           <p className="max-w-9 text-xl leading-5 font-extrabold text-[#2E3749]">
//             TRAVEL Rec
//           </p>
//         </div>
//         {/* Search bar */}
//         <div className="relative">
//           <div className="absolute h-9 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 13 13"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M5.21355 1.60389C4.25621 1.60389 3.33808 1.98419 2.66114 2.66114C1.98419 3.33808 1.60389 4.25621 1.60389 5.21355C1.60389 6.1709 1.98419 7.08903 2.66114 7.76597C3.33808 8.44291 4.25621 8.82322 5.21355 8.82322C6.1709 8.82322 7.08903 8.44291 7.76597 7.76597C8.44291 7.08903 8.82322 6.1709 8.82322 5.21355C8.82322 4.25621 8.44291 3.33808 7.76597 2.66114C7.08903 1.98419 6.1709 1.60389 5.21355 1.60389ZM9.42403 8.28979L13 11.8658L11.8658 13L8.28979 9.42403C7.22943 10.1987 5.9158 10.5447 4.61139 10.393C3.30699 10.2412 2.10789 9.60283 1.25372 8.60539C0.39954 7.60796 -0.0467999 6.32493 0.00388899 5.01271C0.0545779 3.70048 0.598562 2.45571 1.52714 1.52714C2.45571 0.598562 3.70048 0.0545779 5.01271 0.00388899C6.32493 -0.0467999 7.60796 0.39954 8.60539 1.25372C9.60283 2.10789 10.2412 3.30699 10.393 4.61139C10.5447 5.9158 10.1987 7.22943 9.42403 8.28979Z"
//                 fill="#D9D9D9"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             id="voice-search"
//             className="bg-white border h-9 font-medium border-gray-300 text-[#D9D9D9] rounded-3xl w-80 text-sm focus:ring-[#FF852E] outline-[#FF852E] focus:border-[#FF852E] block ps-10 p-2.5"
//             placeholder="Search"
//             required
//           />
//         </div>
//         {/* Header links */}
//         <div className="flex justify-between max-w-96">
//           {data.attributes.header_urls.map((headerUrl) => (
//             <div key={headerUrl.id} className="relative">
//               <button
//                 className="text-[#2E3749] font-semibold mx-5 hover:text-[#FF852E]"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {headerUrl.mainlink.Url_Name}
//               </button>
//               {isMenuOpen && (
//                 <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
//                   {headerUrl.Child_Links.map((childLink) => (
//                     <li key={childLink.id} className="p-2 hover:bg-gray-100">
//                       {childLink.link_image.data && (
//                         <img
//                           src={
//                             BACKEND_URL +
//                             childLink.link_image.data.attributes.url
//                           }
//                           alt={childLink.Url_Name}
//                           className="w-6 h-6 mr-2 inline"
//                         />
//                       )}
//                       <div className="inline-block">
//                         <p className="text-gray-900">{childLink.Url_Name}</p>
//                         <p className="text-gray-500 text-sm">
//                           {childLink.url_description}
//                         </p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//         {/* Sign-in button */}
//         <div>
//           <button className="text-[#2E3749] text-xl bg-white border-4 font-semibold border-[#d9e3f1] shadow-[#d9e3f1] rounded-3xl px-5 py-2">
//             Sign In
//           </button>
//         </div>
//       </div>
//       <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
//         {openNav ? 'Close' : 'Open'}
//       </button>
//       {openNav && (
//         <div className="lg:hidden">
//           <div className="flex justify-between max-w-96">
//             {data.attributes.header_urls.map((headerUrl) => (
//               <div key={headerUrl.id}>
//                 <p className="text-[#2E3749] font-semibold mx-5">
//                   {headerUrl.mainlink.Url_Name}
//                 </p>
//                 <ul>
//                   {headerUrl.Child_Links.map((childLink) => (
//                     <li key={childLink.id}>
//                       {childLink.link_image.data && (
//                         <img
//                           src={
//                             BACKEND_URL +
//                             childLink.link_image.data.attributes.url
//                           }
//                           alt={childLink.Url_Name}
//                         />
//                       )}
//                       <p className="text-white">{childLink.Url_Name}</p>
//                       <p>{childLink.url_description}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
