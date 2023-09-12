export interface CMSImageInterface {
  height?: number;
  width?: number;
  url?: string;
  description?: string;
  title?: string;
  link?: string;
  alt?: string;
}

export interface ImageInterface extends CMSImageInterface {
  /** What field is this for? */
  field?: string;
  /** Alt text */
  alt?: string;
  /** Image source */
  source?: ImageSource;
}

export interface NewImageInterface extends CMSImageInterface {}

export interface ImageSource {
  /** Name of the image file */
  filename: string;
  /** Bucket location where the image file sits */
  location: string;
}

export interface PicturePropsInterface {
  /** The data for this image */
  image: CMSImageInterface;
  /** The dimensions for this image */
  dimensions: DimensionsMediaInterface;
  /** lazy load this image? */
  lazyLoad?: boolean;
  /** Tailwind classes to add to the image (as one string) */
  classes?: string;
}

export interface DimensionsMediaInterface {
  desktop?: DimensionInterface;
  tabletLarge?: DimensionInterface;
  tabletSmall?: DimensionInterface;
  mobile?: DimensionInterface;
  all?: DimensionInterface;
}

export interface DimensionInterface {
  /** Image height */
  h?: number;
  /** Image width */
  w?: number;
}

export interface ImageWebComponentSourceInterface {
  /** The media attribute for the source tag */
  media: string;
  /** The array of the sources */
  srcset: Array<string>;
}
