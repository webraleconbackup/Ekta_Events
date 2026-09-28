import React from 'react';
// import RecentPost from '../../components/RecentPost';
import { blogsdetals1, recentPosts2 } from '../../data';
import SearchTag from '../../components/SearchTag';
import BlogDetals from '../../components/BlogDetals';
import { Helmet } from 'react-helmet';

const Blog1 = ({ id = 1 }) => {
  // const blog = blogsdetals1.find((b) => b.id === id);
  return (
    <>
      <Helmet>
        <title>
          Top 10 Birthday Decoration Ideas | Make Your Party Unforgettable
        </title>
        <meta
          name='description'
          content='Discover the top 10 birthday decoration ideas to make your celebration truly memorable! From creative balloon setups and themed decor to DIY tips, get expert inspiration for birthday parties of all ages.'
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
          content='https://www.ektadecoration.com/Top-10-Birthday-Decoration-Ideas-to-Make-Your-Party-Memorable'
        />
        <meta property='og:type' content='website' />

        <link
          rel='canonical'
          href='https://www.ektadecoration.com/Top-10-Birthday-Decoration-Ideas-to-Make-Your-Party-Memorable'
        />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <BlogDetals
        id={1}
        blogsdetals={blogsdetals1}
        recentPosts={recentPosts2}
      />

      <div className='bg-zinc-100 p-4 w-full max-w-7xl mx-auto my-10'>
        <SearchTag />
      </div>
    </>
  );
};

export default Blog1;
