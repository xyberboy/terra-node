import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index.ejs", { tituloPagina: "TERRAPLEN - Jorge Riva"} ));
router.get("/about", (req, res) => res.render("about.ejs", { tituloPagina: "my BIO"} ));
router.get("/terraplen", (req, res) => res.render("terraplen.ejs", { tituloPagina: "TERRAPLEN - Jorge Riva"} ));
router.get("/contact", (req, res) => res.render("contact.ejs", { tituloPagina: "contact-me"} ));



export default router;
 