// import React, { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Menu from '../components/Menu';
// import ShareButton from '../components/ShareButton';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Helmet } from 'react-helmet';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
// import { post } from 'jquery';
// import "../blog.css";


// const Single = () => {
//   const [post, setPost] = useState({});
//   const location = useLocation();
//   const postId = location.pathname.split("/")[3]

//   const textRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPost&np=1`,{
//           id: postId
//         });
//         setPost(response.data);
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     };
//     fetchData();
//   }, [postId]);

//   useEffect(() => {
//     if (textRef.current) {
//       const textContainer = textRef.current;
//       const parentContainer = textContainer.parentElement;
//       const parentHeight = parentContainer.offsetHeight;
//       const textHeight = textContainer.offsetHeight;

//       if (textHeight > parentHeight) {
//         const overflow = textHeight - parentHeight;
//         const remainingText = textContainer.innerHTML.substr(0, overflow);
//         textContainer.innerHTML = remainingText;
//       }
//     }
//   }, [post.html]);


//   function formatToUrlFriendly(text) {
//     if (!text) {
//       return ''; // Return an empty string or handle the case accordingly
//   }
//     const cleanedText = text
//       .toLowerCase() // Convert to lowercase
//       .replace(/ /g, '-') // Replace spaces with hyphens
//       .replace(/[àáâãäå]/g, 'a') // Replace "à", "á", "â", "ã", "ä", "å" with "a"
//       .replace(/[èéêë]/g, 'e') // Replace "è", "é", "ê", "ë" with "e"
//       .replace(/[ìíîï]/g, 'i') // Replace "ì", "í", "î", "ï" with "i"
//       .replace(/[òóôõö]/g, 'o') // Replace "ò", "ó", "ô", "õ", "ö" with "o"
//       .replace(/[ùúûü]/g, 'u') // Replace "ù", "ú", "û", "ü" with "u"
//       .replace(/[^a-z0-9-_+]/g, '-') // Remove special characters except hyphens and alphanumeric characters
//       .replace(/-{2,}/g, '-'); // Remove consecutive hyphens

//         if (cleanedText.endsWith('-')) {
//             return cleanedText.slice(0, -1);  
//     }return cleanedText;
//   }

//   const handleGoBack = () => {
//     window.history.back(); // Go back to the previous page in the browser's history
//   };

//   console.log(post.strDataCare)

//   return (
//     <>
//     <Helmet>
//         <title>{`Careisgold SpA: ${post.Metatitle}`}</title>
//         <meta name="description" content={post.Metadescription} />

//         {/* Open Graph Tags */}
//         <meta property="og:title" content={post.Metatitle} />
//         <meta property="og:description" content={post.Metadescription} />
//         <meta name="keywords" content={post.Keyword} />
//         <meta property="og:url" content={`https://careisgold.it/notizie/rassegna-stampa/${post.Id}/${formatToUrlFriendly(post.Metatitle)}`} />
//         <meta property="og:type" content="article" /> 
//         <meta name="author" content="careisgold s.p.a" />

//         {/* Canonical Tag */}
//         <link rel="canonical" href={`https://careisgold.it/notizie/rassegna-stampa/${post.Id}/${formatToUrlFriendly(post.Metatitle)}`} />

//         {/* Schema.org Markup */}
//         <script type="application/ld+json">
//             {JSON.stringify({
//                 "@context": "http://schema.org",
//                 "@type": "BlogPosting",
//                 "headline": post.Metatitle,
//                 "description": post.Metadescription,
//                 "image": post.ImgCopertina,
//                 "url": `https://careisgold.it/notizie/rassegna-stampa/${post.Id}/${formatToUrlFriendly(post.Metatitle)}`,
//                 "datePublished": post.DataInserimento,
//                 "dateModified": post.DataModifica,
//                 "author": {
//                     "@type": "Organization",
//                     "name": "Careisgold S.p.A"
//                 },
//                 "publisher": {
//                     "@type": "Organization",
//                     "name": "Careisgold S.p.A",
//                     "logo": {
//                         "@type": "ImageObject",
//                         "url": "https://www.careisgold.it/static/media/logo1.25b1cf4e392fc1ad4340.webp"
//                     }
//                 }
//             })}
//         </script>

//     </Helmet>
//     <Navbar/>

//       <img src={`${post?.ImgCopertina}`} className="img-fluid d-block d-md-none" alt="immagine articolo" width="100%"/>
//       <img src={`${post?.ImgHeader}`} className="img-fluid d-none d-md-block" alt="immagine articolo" width="100%"/>

//       <div className="container-fluid">
//         <div className="container">
//           <div className="row d-flex justify-content-around align-items-center">
//             <div className="col-12 text-center d-flex align-items-center justify-content-center">
//             <img src={`${post?.ImgLogo}`} className="img-fluid position-relative" alt="immagine articolo" width="150rem" /><br/>
//             <span className="text-dark ms-3 fw-bold">{post.strDataCare}</span>
//             </div>
//             <div className="col-12 col-md-8 text-center mb-4">
//               <h1 className="text-default fw-bold fs-1 text-uppercase mb-4 d-none">{post.Metatitle}</h1>
//               <h2 className="text-default fw-bold fs-1 text-uppercase mb-4">{post.Titolo}</h2>
//               <p className="text-dark text-center fs-5-psc fw-medium">{post.Subtitle}</p>
//             </div>
//             <div className="row d-flex justify-content-around align-items-center">
//                 <div className="text-container">
//                 <div ref={textRef} dangerouslySetInnerHTML={{ __html: post.html }}></div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     <div className="container my-5">
//         <div className="row d-flex justify-content-center align-items-center">
//             <div className="text-center">
//                 <button className="btn-default m-3 px-3 py-2 rounded" onClick={handleGoBack}>
//                     <FontAwesomeIcon className="me-2 text-light" icon={faRotateLeft}/>
//                     Torna indietro
//                 </button>
//                 <a href={`${post.LinkPdf}`} target="_blank" rel="noopener noreferrer"> 
//                   <button className="btn-default m-3 px-3 py-2 rounded">
//                       <FontAwesomeIcon className="me-2 text-light" icon={faGlobe}/>
//                       Leggi articolo completo
//                   </button>
//                 </a>
//             </div>
//         </div>
//     </div>

//       <div className="ms-auto col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 fixed-bottom pe-2">
//         <ShareButton postId={postId} postTitle={post.Titolo} postImage={post.ImgCopertina} postDescription={post.Subtitle} postUrl={`https://careisgold.it/notizie/rassegna-stampa/${post.Id}/${formatToUrlFriendly(post.Metatitle)}`} />
//       </div>

//     <Footer/>
//     </>
//   )
// }

// export default Single;
