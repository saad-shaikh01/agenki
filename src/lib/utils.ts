import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const companyConstant = {
  CompanyName: "Rank1Pro",
  CompanyUrl: "rank1pro.com",
  CompanyUrlWithWWW: "www.rank1pro.com",
  CompanyUrlWithHHTPS: "https://www.rank1pro.com",
  PhoneNumber: "1-860-451-4700 ",
  PhoneNumberLink: "tel:1-860-451-4700 ",
  Email: "info@rank1pro.com",
  EmailLink: "mailto:info@rank1pro.com",
  Address: "615 West Johnson Ave, 202-s, Cheshire, CT 06410",
  FacebookLink: "https://www.facebook.com/BellevuePublisher",
  InstagramLink: "https://www.instagram.com/bellevuepublishers/ ",
  LinkedinLink: "https://www.linkedin.com/company/bellevue-publishers/",
  TwitterLink: "https://twitter.com/BellevuePublish",
  TrustPilotLink: "https://www.trustpilot.com/review/nydhub.com",
  WhatsAppLink: "tel:1-860-451-4700",
  ApiEndpoint: "https://americanseohub.com/api/v1/registerUserSearchBloom",
  GoogleReviewsLink:
    "https://www.google.com/search?q=bellevue+publishers&oq=bellevuepublishers&gs_lcrp=EgZjaHJvbWUqCQgCEAAYChiABDIGCAAQRRg5MgYIARBFGDwyCQgCEAAYChiABDIJCAMQABgKGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEJMTAwMTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x89e7d935a2265f6f:0x4108c6633bc8a125,1,,,,",
  REACT_APP_reCAPTCHA_SITE_KEY: "6LeLj3InAAAAAKu0MpTsQtHhDM2SRjY26CLxPDCG",
  REACT_APP_reCAPTCHA_SECRET_KEY: "6LeLj3InAAAAAJDHGPz7h1TknZq77KbI9AzY1yq9",
};