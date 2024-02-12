import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Box, Link } from "@mui/material";
import emailjs from "@emailjs/browser";
import axios from "axios";
import image from "../../assests/images/Fotter image.jpg";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_qrhnapk";
    const templateId = "template_bu3h0eh";
    const publicKey = "Xzxcj1ieSG0ZTvKyu";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Jeckon",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-700 py-16 text-white"id="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-3 justify-items-center md:mx-4 mx-3 my">
        <div>
          <img
            src={image}
            alt=""
            width={540}
            height={324}
            className="rounded-lg my-8"
          />
        </div>
        <div className="max-w-full mx-8 mt-6">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              border: "2px solid  #000000",
              borderRadius: "12px",
              boxShadow: 1,
            }}
          >
            <Typography variant="h4" align="center" mb={2}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                fullWidth
                type="submit"
                sx={{
                  mt: 2,
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#111",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </div>
      </div>
      <div className="mt-48">
        <div className="flex flex-row gap-5 justify-center text-white my-6">
          <Link className="no-underline">
            <h1>Careers</h1>
          </Link>
          <Link>
            <h1>Privacy Policy</h1>
          </Link>
          <Link>
            <h1>Terms and Condition</h1>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1>@2023 Jeckon Publishers</h1>
        </div>
      </div>
    </div>

    // <div className="bg-gray-700 py-28 text-white">
    //   <Box
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       height: "100vh",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         maxWidth: 600,
    //         mx: "auto",
    //         p: 2,
    //         border: "2px solid  #000000",
    //         borderRadius: "12px",
    //         boxShadow: 1,
    //       }}
    //     >
    //       <Typography variant="h4" align="center" mb={2}>
    //         Contact Us
    //       </Typography>
    //       <form onSubmit={handleSubmit} >
    //         <TextField
    //           fullWidth
    //           label="Name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           margin="normal"
    //           required
    //         />
    //         <TextField
    //           fullWidth
    //           label="Email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           margin="normal"
    //           required
    //           type="email"
    //         />
    //         <TextField
    //           fullWidth
    //           label="Message"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //           margin="normal"
    //           required
    //           multiline
    //           rows={4}
    //         />
    //         <Button
    //           fullWidth
    //           type="submit"
    //           sx={{
    //             mt: 2,
    //             backgroundColor: "#000",
    //             color: "#fff",
    //             "&:hover": {
    //               backgroundColor: "#111",
    //             },
    //           }}
    //         >
    //           Submit
    //         </Button>
    //       </form>
    //     </Box>
    //   </Box>
    // </div>
  );
};

export default Footer;
