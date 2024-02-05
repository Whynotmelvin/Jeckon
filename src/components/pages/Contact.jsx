// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const Footer = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_q1vsk4b", "template_bu3h0eh", form.current, {
//         publicKey: "dXLisodh5e7jeG87H",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           e.target.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="bg-gray-700 py-28 text-white">
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "50vh",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             maxWidth: 600,
//             mx: "auto",
//             p: 2,
//             border: "2px solid  #000000",
//             borderRadius: "12px",
//             boxShadow: 1,
//           }}
//         >
//           <Typography variant="h4" align="center" mb={2}>
//             Contact Us
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               margin="normal"
//               required
//               type="email"
//             />
//             <TextField
//               fullWidth
//               label="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               margin="normal"
//               required
//               multiline
//               rows={4}
//             />
//             <Button
//               fullWidth
//               type="submit"
//               sx={{
//                 mt: 2,
//                 backgroundColor: "#000",
//                 color: "#fff",
//                 "&:hover": {
//                   backgroundColor: "#111",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Footer;
