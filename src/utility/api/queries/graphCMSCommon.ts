export const OnHeaderGraphQl = `
... on Header {
  id
  title
  searchText
  signInText
  loginText
  countryText
  countrySelectorHeadingText
  countrySelectorText
  searchPlaceholder
  recentlySearched
  deleteText
  deleteButton
  historyMessage
  viewResults
  getTheApp
  countryFlag {
    url
    width
    height
  }
  logo {
    url
    width
    height
  }
  menu {
    id
    title
    excludeFromApp
    submenus {
      id
      externalLink
      excludeFromApp
      title
      path
      icon {
        url
        width
        height
        description
      }
      submenus {
        id
        externalLink
        excludeFromApp
        title
        path
        icon {
          url
          width
          height
          description
        }
      }
    }
  }
}
`;
export const OnHeaderGraphQl2 = `
header {
  id
  title
  searchText
  signInText
  loginText
  countryText
  countrySelectorHeadingText
  countrySelectorText
  searchPlaceholder
  recentlySearched
  deleteText
  deleteButton
  historyMessage
  viewResults
  getTheApp
  countryFlag {
    url
    width
    height
  }
  logo {
    url
    width
    height
  }
  menu {
    id
    title
    excludeFromApp
    submenus {
      id
      externalLink
      excludeFromApp
      title
      path
      border
      icon {
        url
        width
        height
        description
      }
      submenus {
        id
        externalLink
        excludeFromApp
        title
        path
        icon {
          url
          width
          height
          description
        }
      }
    }
  }
}
`;

export const onFooterGraphQl = `
... on Footer {
    id
    title
    body {
        html
        text
        raw
    }
    logo {
        url
        width
        height
    }
    menu {
        id
        title
        submenus {
            id
            title
            path
            externalLink
            icon {
              url
              width
              height
              description
            }
            submenus {
                id
                externalLink
                title
                path
                icon {
                  url
                  width
                  height
                  description
                }
            }
        }
    }
}
`;
export const onFooterGraphQl2 = `
footer {
  id
  title
  body {
    html
    text
    raw
  }
  logo {
    url
    width
    height
  }
  menu {
    id
    title
    submenus {
      id
      title
      path
      externalLink
      icon {
        url
        width
        height
        description
      }
      submenus {
        id
        externalLink
        title
        path
        icon {
          url
          width
          height
          description
        }
      }
    }
  }
}
`;

export const onNewsletterBlockGraphQl = `
... on NewsletterBlock {
          id
          title
          buttonUrl
          externalLink
          emailContact
          body {
            text
          }
          images {
            url
            width
            height
            description
          }
          inputPlaceholderText
          submitButtonText
          buttonColour
          backgroundColor
          buttonIcon
        }
`;

export const onNewsletterFormGraphQl = `
... on NewsletterForm {
      id
      title
      buttonUrl
      emailContact
      body {
        text
        html
      }
      newsletterBody {
        html
        text
      }
      inputPlaceholderText
      submitButtonText
      buttonColour
      buttonIcon
      termsAndConditionsBody {
        html
        text
      }
      termsAndConditions
      noThanksMessage
      successfulSubmitionBody {
        html
        text
      }
      successfulSubmissionButtonTitle
      successfulSubmissionUrl
    }
`;

export const onListBlockGraphQl = `
  ... on ListBlock {
    id
    title
    subtitle
    filters
    results
    levels
    topics
    subjects
    curriculum
  }
`;

export const onContentBlockGraphQl = `
... on ContentBlock {
          id
          title
          body {
            text
            html
          }
          images {
            url
          }
          alignContents
        }
`;

export const onCardBlockGraphQl = `
... on CardBlock {
          id
          title
          body
          layout
          heading
          path
          cards {
            __typename
            ... on Cta {
              title
              url
              body {
                text
                html
              }
              image {
                url
                height
                width
              }
              buttonText
              buttonColour
              buttonicon
              ctaType
              alignContents
              externalLink
            }
            ... on Article {
                slug
                title
                  image {
                    url
                    height
                    width
                  }
                  date
                }
              ... on CaseStudy {
                title
                slug
                body {
                  text
                }
                image {
                  url
                  height
                  width
                }
                authors {
                 name
                 role
                 institution
                }
                submitButtonText
              }
              ... on Event {
                title
                submitButtonText
                slug
                image {
                  url
                  height
                  width
                }
              }
          }
        }
`;

export const onBlockGraphQl = `
... on Block {
        id
        type
        title
        hideTitle
        centerText
        body {
          text
        }
        images {
          url
          width
          height
          title
          description
          link
        }
        ctas {
          title
          body {
            text
            html
          }
          buttonColour
          url
          buttonText
          buttonicon
          externalLink
        }
        reversed
        colourScheme
        border
        fixImageToBottom
        subblocks {
          __typename
          ... on Block {
            id
            title
            body {
              html
            }
            images {
              url
              height
              width
            }
          }
          ... on CaseStudy {
            id
            title
            slug
            body {
              html
            }
            authors {
              name
              role
              institution
            }
          }
          ... on Event {
            id
            title
            date
            description {
              html
            }
            speakers {
              name
              role
              institution
            }
          }
        }
        config {
          name
          value
        }

      }
`;

export const onBookBlockGraphQl = `
... on Book {
        id
        title
        width
        height
        pages
        isbn
        price
        description
        format
        publishingDate
        publisher
}`;

export const onQuoteBlockGraphQl = `
... on Quote {
        id
        colourScheme
        body {
          text
        }
      }
`;

export const onHtmlBlockGraphQl = `
... on HtmlBlock {
        id
        title
        html
      }
`;

export const onWallAccountGraphQl = `
... on WallAccount {
  id
  title
  colourSchema
  body {
    text
    html
  }
  wallImage {
    url
  }
}
`;
