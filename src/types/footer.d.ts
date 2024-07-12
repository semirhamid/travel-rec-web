type LinkImage = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: any;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
};

type FooterChild = {
  id: number;
  Url: string;
  Url_Name: string;
  url_description: string | null;
  link_image: LinkImage;
};

type FooterLink = {
  id: number;
  Main_Link: string;
  footer_child: FooterChild[];
};

type SocialMedia = {
  id: number;
  Url: string;
  Url_Name: string;
  url_description: string | null;
  link_image: LinkImage;
};

type GeneralLink = {
  id: number;
  Url: string;
  Url_Name: string;
  url_description: string | null;
  link_image: LinkImage;
};

type FooterApiResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      footer_description: string;
      Footer_Links: FooterLink[];
      Social_Media: SocialMedia[];
      footer_general_links: GeneralLink[];
    };
  };
  meta: any;
};
