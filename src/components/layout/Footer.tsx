import { BACKEND_URL } from '../../types/global';
import { FOOTER_URL, LOGO_URL } from '../../constants/url.global';
import api from '../../util/axios';

const fetchFooterData = async () => {
  try {
    const response = await api.get<FooterApiResponse>(BACKEND_URL + FOOTER_URL);
    const footerData = response.data;
    return footerData.data.attributes;
  } catch (error) {
    console.error('Error fetching footer data:', error);
  }
};

const fetchLogoData = async () => {
  try {
    const response = await api.get(LOGO_URL);
    const logoData = response.data;
    return logoData.data.attributes.logo.data.attributes;
  } catch (error) {
    console.error('Error fetching logo data:', error);
  }
};
const data = await fetchFooterData();
const logoData = await fetchLogoData();

export default function Footer() {
  if (!data) {
    console.log(data);
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-[#061C23] w-full">
      <div className="px-5 lg:px-10 py-10 lg:py-16 max-w-8xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10">
          <div className="lg:flex max-h-16 hidden">
            <img
              className="w-14 mr-2"
              src={BACKEND_URL + logoData.url}
              alt=""
            />
            <p className="max-w-20 text-xl font-bold text-white">TRAVEL Rec</p>
          </div>
          {data.Footer_Links.map((link) => (
            <div key={link.id}>
              <p className="text-white text-base lg:text-2xl font-bold">
                {link.Main_Link}
              </p>
              <ul className="pt-5">
                {link.footer_child.map((child) => (
                  <li key={child.id}>
                    <a
                      href={child.Url}
                      className="text-white text-sm leading-9"
                    >
                      {child.Url_Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* logo mobile */}
        <div className="lg:hidden max-h-16 flex justify-center py-10">
          <img
            className="w-14 h-14 mr-2"
            src={BACKEND_URL + logoData.url}
            alt=""
          />
          <p className="max-w-20 text-xl font-bold text-white">TRAVEL Rec</p>
        </div>
        {/* follow us */}
        <div className="flex items-center justify-center my-14">
          <div className="flex items-center justify-center">
            <p className="text-[#7886A1] mr-2 text-xs">Follow us on</p>
            {data.Social_Media.map((social) => (
              <a key={social.id} href={social.Url}>
                <img
                  className="w-5 h-5 mx-2"
                  src={BACKEND_URL + social.link_image.data?.attributes.url}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
        {/* general links */}
        <div className="flex flex-wrap justify-center mb-14">
          {data.footer_general_links.map((general, index) => (
            <span key={general.id}>
              <a href={general.Url} className="text-white text-base font-light">
                {general.Url_Name}
              </a>
              {index !== data.footer_general_links.length - 1 && (
                <span className="text-white mx-5 text-lg">|</span>
              )}
            </span>
          ))}
        </div>
        {/* footer description */}
        <div className="max-w-6xl mx-auto mb-20">
          <p className="text-white text-base font-light leading-10 text-center">
            {data.footer_description}
          </p>
        </div>
      </div>
    </footer>
  );
}
