import type { Struct, Schema } from '@strapi/strapi';

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
    icon: '';
    description: '';
  };
  attributes: {
    SliderHeading: Schema.Attribute.String;
    SliderImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HeadingWithDescriptionHeadingWithDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_heading_with_description_heading_with_descriptions';
  info: {
    displayName: 'HeadingWithDescription';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Description: Schema.Attribute.RichText;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    HeaderLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    HeaderLink: Schema.Attribute.Component<'button.button', true>;
    CTAText: Schema.Attribute.String;
  };
}

export interface ForSalesContactForSalesContact extends Struct.ComponentSchema {
  collectionName: 'components_for_sales_contact_for_sales_contacts';
  info: {
    displayName: 'ForSalesContact';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Button: Schema.Attribute.Component<'button.button', false>;
    Description: Schema.Attribute.Text;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    ContactAddress: Schema.Attribute.Text;
    NavLinks: Schema.Attribute.Component<'button.button', true>;
    NavLinkHeading: Schema.Attribute.String;
    DownloadAppHeading: Schema.Attribute.String;
    AppStoreImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    GooglePlayImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FooterLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CopyrightText: Schema.Attribute.String;
    ContactDetails: Schema.Attribute.RichText;
    FooterFullWidthImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface DownloadAppDownloadApp extends Struct.ComponentSchema {
  collectionName: 'components_download_app_download_apps';
  info: {
    displayName: 'DownloadApp';
    description: '';
  };
  attributes: {
    SectionHeading: Schema.Attribute.String;
    SectionDescription: Schema.Attribute.Text;
    AppStoreImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    GooglePlayImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    RightSideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    ButtonUrl: Schema.Attribute.String;
    ButtonAriaLabel: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'slider.slider': SliderSlider;
      'heading-with-description.heading-with-description': HeadingWithDescriptionHeadingWithDescription;
      'header.header': HeaderHeader;
      'for-sales-contact.for-sales-contact': ForSalesContactForSalesContact;
      'footer.footer': FooterFooter;
      'download-app.download-app': DownloadAppDownloadApp;
      'button.button': ButtonButton;
    }
  }
}
