// BlogDetail.jsx
import React from 'react';
import BlogDetals from '../../components/BlogDetals';
import SearchTag from '../../components/SearchTag';
import { blogsdetals2, recentPosts1 } from '../../data';
import { Helmet } from 'react-helmet';

const Blog2 = () => {
  return (
    <>
      <Helmet>
        <title>
          Romantic Anniversary Decoration Ideas | Home & Banquet Hall Styling
        </title>
        <meta
          name='description'
          content='Celebrate love with Ekta Decoration’s romantic anniversary setups! Explore elegant home decorations and stunning banquet hall arrangements, including balloon decor, floral themes, and cozy lighting to make your anniversary unforgettable.'
        />
        <meta
          name='keywords'
          content='Ekta Decoration, Balloon Decoration Ideas, Event Decoration Blog, Wedding Decoration Trends, Birthday Party Decoration, Baby Shower Decoration, Creative balloon decoration ideas, Romantic wedding balloon setups, Birthday party decoration inspiration, Elegant baby shower decoration tips, Event styling ideas for celebrations, Party decoration trends in Gurugram, DIY balloon decoration tutorials'
        ></meta>

        <meta
          property='og:title'
          content='Ekta Decoration Blog – Creative Balloon Decoration & Event Styling Ideas'
        />

        <meta
          property='og:description'
          content='Stay inspired with Ekta Decoration’s blog! Explore unique balloon decoration ideas, wedding setups, birthday themes, and event styling trends. Perfect tips & designs to make every celebration memorable.'
        />

        <meta
          property='og:image'
          content='https://www.ektadecoration.com/home-image/adult3.jpg'
        />
        <meta
          property='og:url'
          content='https://www.ektadecoration.com/Romantic-Anniversary-Decoration-at-Home-&-Banquet-Halls'
        />
        <meta property='og:type' content='website' />

        <link rel='canonical' href='https://www.ektadecoration.com/Romantic-Anniversary-Decoration-at-Home-&-Banquet-Halls' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <BlogDetals
        id={2}
        blogsdetals={blogsdetals2}
        recentPosts={recentPosts1}
      />

      <div className='bg-zinc-100 p-4 w-full max-w-7xl mx-auto my-10'>
        <SearchTag />
      </div>
    </>
  );
};

export default Blog2;
