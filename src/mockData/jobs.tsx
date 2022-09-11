import restaurant from "../assets/restaurant.jpeg"
import pablos from "../assets/pablos.png"
import paint from "../assets/paint.png"
import bablos from "../assets/bablos.png"

export const jobs = [
    {
        companyName: "Toto Japanese Restaurant",
        logo: `${restaurant}`,
        jobTitle: "Server - Female",
        location: "Miami",
        salary: "15/hr",
        redirect: "/company/info"
    },
    {
        companyName: "Toto Japanese Restaurant",
        logo: `${restaurant}`,
        jobTitle: "Cashier - Male",
        location: "Miami",
        salary: "18/hr",
        redirect: "/company/info"
    },
    {
        companyName: "Pablos Paint hut!",
        logo: `${pablos}`,
        jobTitle: "Painter",
        location: "Earth",
        salary: "90000/hr",
        redirect: "/company/info"
    },
    {
        companyName: "Bablos",
        logo: `${bablos}`,
        jobTitle: "Janitor - Male/Female",
        location: "Moon",
        salary: "50000/hr",
        redirect: ""
    },
    {
        companyName: "Pablos hut!",
        logo: `${pablos}`,
        jobTitle: "Server",
        location: "Earth",
        salary: "90000/hr",
        redirect: ""
    },
    {
        companyName: "Paint hut!",
        logo: `${paint}`,
        jobTitle: "Maid - Female",
        location: "Earth",
        salary: "90000/hr",
        redirect: ""
    }
]