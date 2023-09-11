import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  Navigation,
  Navigationfr,
  Home,
  Contact,
  Blog,
  Postphotography,
  Footer,
} from "./components";
import Typesofphoto from "./components/typesofphoto";
import Wintermarketing from "./components/Wintermarketing";
import Easyproductphoto from "./components/Easyproductphoto";
import Topshopify from "./components/Topshopify";
import Videoediting from "./components/Videoediting";
import Softbox from "./components/Softbox";
import Minimizebounce from "./components/Minimizebounce";
import Termsconditions from "./components/Termsconditions";
import Privacypolicy from "./components/Privacypolicy";
import ClothingPhoto from "./components/ClothingPhoto";
import CarPhoto from "./components/CarPhoto";
import ProductReselling from "./components/ProductReselling";
import FoodPhoto from "./components/FoodPhoto";
import InfluenceMarketing from "./components/InfluenceMarketing";
import ScrollToTop from "./components/ScrollToTop";
import Newyear from "./components/Newyear";
import Productphotography from "./components/Productphotography";
import Thankyou from "./components/Thankyou";
import Demoblog from "./components/Demo-blog";
import NotFound from "./components/NotFound";
import AllBlogs from "./components/AllBlogs";
import EcomToBrand from "./components/EcomToBrand";
import ArtInteli from "./components/ArtInteli";
import AmazonImage from "./components/AmazonImage";
import PhotoStyle from "./components/PhotoStyle";
import PhotoStyle2 from "./components/PhotoStyle2";
import GraphicsDesign from "./components/GraphicsDesign";
import ReducingBounce from "./components/ReducingBounce";
import CreativeImageEdit from "./components/CreativeImageEdit";
import PhotoFact from "./components/PhotoFact";
import SrgbColorspace from "./components/SrgbColorspace";
import OutsourcePhoto from "./components/OutsourcePhoto";
import PostProduction from "./components/PostProduction";
import Spanish from "./components/Spanish";
import France from "./components/France";
import Thailand from "./components/Thailand";
import Contactes from "./components/Contactes";
import Contactfr from "./components/Contactfr";
import Contactde from "./components/Contactde";
import Contactnl from "./components/Contactnl";
import Contactth from "./components/Contactth";
import Thankyoues from "./components/Thankyoues";
import Thankyounl from "./components/Thankyounl";
import Thankyoude from "./components/Thankyoude";
import Thankyoufr from "./components/Thankyoufr";
import Germany from "./components/Germany";
import Dutch from "./components/Dutch";
import Thankyouth from "./components/Thankyouth";
import Test from "./components/Test";
import Calendly from "./components/CalendlyTest";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import ThankUPdf from "./components/PDFViewer/ThankUPdf";
import { FakeData } from "./components/FakeData/FakeData";
import VirtualTour from "./components/VitualTour/VirtualTour";
import Partnership from "./components/Partnership/Partnership";
import NewNavbar from "./components/NewNavbar/NewNavbar";

export const ManageContext = createContext();

export default function App() {
  const [localData, setLocalData] = useState(FakeData);
  const [getUserLocation, setUserLocation] = useState();
  /*
  const userLocation = ()=> {
    fetch("https://ip-api.io/json?api_key="+process.env.REACT_APP_IPAPI)
    .then(res => res.json())
    .then(data => {
      console.log(
        "Your ip address is " +
          data.ip +
          " city: " +
          data.city +
          " region: " +
          data.region_name +
          " country: " +
          data.country_name
      );
      setUserLocation(data.country_name); 

    
      if (data.country_name == "France") {
        window.location.href = "https://cutoutwiz.com/fr";
      }
      if (data.country_name == "Spain") {
        window.location.href = "https://cutoutwiz.com/es";
      }
      if (data.country_name == "Germany") {
        window.location.href = "https://cutoutwiz.com/de";
      }
      if (data.country_name == "Netherlands") {
        window.location.href = "https://cutoutwiz.com/nl";
      }
      if (data.country_name == "Thailand") {
        window.location.href = "https://cutoutwiz.com/th";
      }
      
    })
  }*/
  useEffect(() => {
    // userLocation()
  }, [])
  return (
    <ManageContext.Provider value={[localData, getUserLocation, setUserLocation]}>

      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/" element={<NewNavbar />}>
            <Route index element={<Home />} />
            <Route path="/service-portfolio" element={<PDFViewer />} />

            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/book-a-call" element={<Calendly />} />
            <Route path="/thank-you-for-download" element={<ThankUPdf />} />

            <Route
              path="/5-important-photography-tips-for-beginners"

              element={<Postphotography />}
            />
            <Route
              path="/types-of-photography-which-one-drive-your-inner-passion-most"

              element={<Typesofphoto />}
            />
            <Route
              path="/explore-our-services" element={<Test />}
            />
            <Route
              path="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"

              element={<Wintermarketing />}
            />
            <Route
              path="/easy-product-photography-solutions-for-small-business"

              element={<Easyproductphoto />}
            />
            <Route
              path="/top-shopify-marketing-strategy-for-sellers"

              element={<Topshopify />}
            />
            <Route
              path="/5-interesting-video-editing-facts"

              element={<Videoediting />}
            />
            <Route
              path="/minimize-your-bounce-rate"

              element={<Minimizebounce />}
            />
            <Route
              path="/how-to-make-a-softbox-for-product-photography"

              element={<Softbox />}
            />
            <Route
              path="/terms-and-conditions"

              element={<Termsconditions />}
            />
            <Route
              path="/privacy-policy"

              element={<Privacypolicy />}
            />
            <Route
              path="/top-new-year-resolution-for-your-online-store"

              element={<Newyear />}
            />
            <Route
              path="/product-photography-how-to-take-photos-for-your-e-commerce-business"

              element={<Productphotography />}
            />
            <Route
              path="/a-beginners-how-to-guide-for-clothing-photography"

              element={<ClothingPhoto />}
            />
            <Route
              path="/car-photography-a-beginners-how-to-guide-and-tips"

              element={<CarPhoto />}
            />
            <Route
              path="/product-reselling-photography-why-and-how-to-do-it"

              element={<ProductReselling />}
            />
            <Route
              path="/top-8-food-photography-tips-for-beginners"

              element={<FoodPhoto />}
            />
            <Route
              path="/influencer-marketing-how-to-find-the-right-one"

              element={<InfluenceMarketing />}
            />
            <Route path="/thank-you/*" element={<Thankyou />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            <Route path="/demo-blog" element={<Demoblog />} />
            <Route
              path="/how-to-turn-your-e-commerce-business-into-a-brand"

              element={<EcomToBrand />}
            />
            <Route
              path="/artificial-intelligence-is-used-in-image-editing"

              element={<ArtInteli />}
            />
            <Route
              path="/an-introduction-to-amazon-image-guidelines"

              element={<AmazonImage />}
            />
            <Route
              path="/photography-style-guide"

              element={<PhotoStyle />}
            />
            <Route
              path="/photography-style-guide2"

              element={<PhotoStyle2 />}
            />
            <Route
              path="/why-post-production-services-are-important-for-e-commerce-businesses"

              element={<PostProduction />}
            />
            <Route
              path="/why-you-should-outsource-your-image-editing"

              element={<OutsourcePhoto />}
            />
            <Route
              path="/srgb-colorspace-the-journey-from-introduction-to-importance"

              element={<SrgbColorspace />}
            />
            <Route
              path="/tips-for-reducing-bounce-rate-and-increasing-conversion"

              element={<ReducingBounce />}
            />
            <Route
              path="/why-is-graphic-design-important-for-e-commerce-business"

              element={<GraphicsDesign />}
            />
            <Route
              path="/importance-of-creative-image-editing-for-product-photos"

              element={<CreativeImageEdit />}
            />
            <Route
              path="/5-interesting-photo-editing-facts"

              element={<PhotoFact />}
            />
            <Route path="/es" element={<Spanish />} />
            <Route path="/fr" element={<France />} />
            <Route path="/de" element={<Germany />} />
            <Route path="/nl" element={<Dutch />} />
            <Route path="/th" element={<Thailand />} />
            <Route
              path="/es/thank-you/*"

              element={<Thankyoues />}
            />
            <Route
              path="/nl/thank-you/*"

              element={<Thankyounl />}
            />
            <Route
              path="/de/thank-you/*"

              element={<Thankyoude />}
            />
            <Route
              path="/fr/thank-you/*"

              element={<Thankyoufr />}
            />
            <Route
              path="/th/thank-you/*"

              element={<Thankyouth />}
            />
            <Route path="/es/contact-us" element={<Contactes />} />
            <Route path="/nl/contact-us" element={<Contactnl />} />
            <Route path="/fr/contact-us" element={<Contactfr />} />
            <Route path="/de/contact-us" element={<Contactde />} />
            <Route path="/th/contact-us" element={<Contactth />} />
            <Route path="*" element={<NotFound />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="virtual-tour" element={<VirtualTour />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>

    </ManageContext.Provider>

  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Homes() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
