import { Wrap, WrapItem } from "@chakra-ui/react";
import CardLayout from "../components/Layout/Card/cardLayout";
import CardTitleLayout from "../components/Layout/Card/cardTitleLayout";
import PostCard from "../components/Cards/postCard";
import { postsData } from "../lib/data/postsData";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

const Posts = ({ posts }) => {
  return (
    <PageTransition>
      <CardLayout>
        <CardTitleLayout title={"Posts"} />
        <Wrap spacing={5} justify={{ base: "center" }}>
          {posts.map((post) => (
            <WrapItem key={post.title}>
              <PostCard post={post} />
            </WrapItem>
          ))}
        </Wrap>
      </CardLayout>
      <Footer />
    </PageTransition>
  );
};

export const getStaticProps = async () => {
  const posts = postsData;
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
