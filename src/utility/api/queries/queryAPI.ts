<<<<<<< HEAD
import {gql} from 'graphql-request';
=======
import { gql } from 'graphql-request';
>>>>>>> d61a5ac658ef921cdab19fff88231e40f2e4b3f7
import {
	OnHeaderGraphQl,
	OnHeaderGraphQl2,
	onFooterGraphQl,
	onNewsletterBlockGraphQl,
	onNewsletterFormGraphQl,
	onCardBlockGraphQl,
	onContentBlockGraphQl,
	onBlockGraphQl,
	onListBlockGraphQl,
	onWallAccountGraphQl,
	onFooterGraphQl2,
	onHtmlBlockGraphQl,

} from './graphCMSCommon';

type makePageCMSQueryProps = {
	slug?: string;
	market?: any;
	id?: string;
};

export const makePageCMSQuery = ({slug, market}: makePageCMSQueryProps) => {
	if (market && slug) {
		return gql`
  {
    pages(where: {sites: ${process.env.NEXT_PUBLIC_APP_SITE}, market: ${market}, slug: "${slug}"}) {
      id
      __typename
      title
      slug
      market
      blocks {
        __typename
          ${OnHeaderGraphQl}
          ${onFooterGraphQl}
          ${onCardBlockGraphQl}
          ${onContentBlockGraphQl}
          ${onNewsletterBlockGraphQl}
          ${onNewsletterFormGraphQl}
          ${onBlockGraphQl}
          ${onListBlockGraphQl}
          ${onWallAccountGraphQl}
          ${onHtmlBlockGraphQl}
      }
      seo {
        id
        title
        description
        keywords
      }

    }
  }
  `;
	}
};

export const makeLangaugeBookCMSQuery = ({slug, market}: makePageCMSQueryProps) => {
	return gql`
  {
    pages(where: {sites: ${process.env.NEXT_PUBLIC_APP_SITE}, market: ${market}, slug: "${slug}"}) {
      bookLabels {
        title
        body {
          text
        }
        labelType
      }
    }
  }
  `;
};

export const makeLangaugeBookUnitsCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
  {
    pages(where: {market: ${market}, sites: ${process.env.NEXT_PUBLIC_APP_SITE}, slug: "audio"}) {
      bookLabels(where: {labelType: noAudio}) {
        title
        body {
          text
        }
      }
    }
  }
  `;
};

export const makeHeaderFooterCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
  {
    sites(where: {key: "${process.env.NEXT_PUBLIC_APP_SITE}"}) {
      markets(where: {key: "${market}"}) {
       ${OnHeaderGraphQl2}
       ${onFooterGraphQl2}
     }
   }
  }
  `;
};

export const makeMetaDataQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
  {
    pages(where: {market: ${market}, sites: ${process.env.NEXT_PUBLIC_APP_SITE}, slug: "home"}) {
      seo {
        id
        title
        description
        keywords
      }
      image {
        url
      }
    }
  }
  `;
};

export const makeListPageCMSQuery = ({slug, market}: makePageCMSQueryProps) => {
	return gql`
  {
    pages(where: {slug: "${slug}", market: ${market}}) {
      id
      __typename
      title
      slug
      market
      blocks {
        __typename
          ${OnHeaderGraphQl}
          ${onFooterGraphQl}
          ${onListBlockGraphQl}
          ${onNewsletterBlockGraphQl}
          ${onNewsletterFormGraphQl}
      }
      seo {
        id
        title
        description
        keywords
      }
    }
  }
  `;
};

export const ArticlesListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
    articles(where: {market: ${market}}) {
        id
        title
        slug
        date
        image {
          url
        }
        levels {
          id
          name
        }
        subjects {
          id
          name
        }
        topics {
          id
          name
        }
      }
`;
};

export const EventsListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
    events(where: {market: ${market}}) {
      id
      title
      slug
      date
      image {
        url
      }
      levels {
        id
        name
      }
      subjects {
        id
        name
      }
      topics {
        id
        name
      }
    }
  `;
};

export const newsletterFormCMSQuery = ({id}: makePageCMSQueryProps) => {
	return gql`
  {
    newsletterForm(where: {id: "${id}}) {
      id
        title
        buttonUrl
        emailContact
        body {
          text
        }
        inputPlaceholderText
        submitButtonText
        buttonColour
        buttonIcon
    }
  `;
};

export const CaseStudiesListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`
    caseStudies(where: {market: ${market}}) {
      id
      title
      date
      slug
      image {
        url
      }
      levels {
        id
        name
      }
      subjects {
        id
        name
      }
      topics {
        id
        name
      }
    }
  `;
};

export const MakeArticlesListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`{
    ${ArticlesListCMSQuery(market)}
  }`;
};

export const MakeEventsListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`{
    ${EventsListCMSQuery(market)}
  }`;
};

export const MakeCaseStudiesListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`{
    ${CaseStudiesListCMSQuery(market)}
  }`;
};
export const MakeResourcesListCMSQuery = ({market}: makePageCMSQueryProps) => {
	return gql`{
    ${ArticlesListCMSQuery(market)}
    ${EventsListCMSQuery(market)}
    ${CaseStudiesListCMSQuery(market)}
  }`;
};
