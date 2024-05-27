export interface Update {
    version: string;
    data: string;
    description: string;
    link: string;
}

export interface AppDetails {
    id: string;
    title: string;
    description: string;
    platform: string;
    price: string;
    image: string;
    logo: string;
    version: string;
    images: string[];
    info: string;
    download: string;
    updates: Update[];
}