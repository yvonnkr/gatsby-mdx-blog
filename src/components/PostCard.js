import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

import styles from "../css/postcard.module.css";

const PostCard = ({ post }) => {
  const { title, date, author, slug, image } = post.frontmatter;
  const img = image.childImageSharp.fluid;

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link to={slug} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
