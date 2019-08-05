import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode {
        edges {
          node {
            id
            original
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          instagram
        }
      }
    }
  `);

  const photos = data.allInstaNode.edges.slice(0, 9);

  return (
    <div className="flex flex-wrap">
      {photos.map(photo => (
        <a
          className="flex w-1/3"
          href={data.site.siteMetadata.instagram}
          key={photo.node.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="m-1 overflow-hidden relative w-full">
            <Image
              className="h-full"
              fluid={photo.node.localFile.childImageSharp.fluid}
              key={photo.node.id}
              alt={photo.node.caption}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Instagram;
