interface LinkImageData {
  id: number;
  attributes: {
    url: string;
  };
}

interface ChildLink {
  id: number;
  Url: string | null;
  Url_Name: string;
  url_description: string | null;
  link_image: {
    data: LinkImageData | null;
  };
}

interface HeaderUrl {
  id: number;
  Child_Links: ChildLink[];
  mainlink: {
    id: number;
    Url: string | null;
    Url_Name: string;
    url_description: string | null;
    link_image: {
      data: LinkImageData | null;
    };
  };
}

export interface HeaderData {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    header_urls: HeaderUrl[];
  };
}