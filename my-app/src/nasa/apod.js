// import React from "react";
// useEffect(() => {
//     // call your API
//     (async () => {
//       let response = await fetch(
//         "https://api.nasa.gov/planetary/apod?api_key=DAPoqrBhbT7akl938Kc7FkuCnPjAdvQnw8aCoSmG"
//       );
//       let data = await response.json();
//       setData(data);
//     })();
//   }, []);
//   if (data && Object.keys(data).length > 0) {
//     return (
//       <Apod {...data} />
//     );
//   }


// function Apod({ url, explanation }) {
//     return (
//         <div>
//             <img src={url} alt={"fall back"} />
//             <p>{explanation}</p>
//         </div>

//     );
// }
// export default Apod;