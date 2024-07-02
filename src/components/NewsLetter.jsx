import Banner from "../shared/Banner";
import communityImg from "../assets/community.png";

const NewsLetter = () => {
  return (
    <div className="py-16">
      <Banner
        banner={communityImg}
        heading={"Each student can share their discount code to friends"}
        subheading={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi libero veniam ducimus quia"
        }
        btn={"I have a code"}
        link={"/referFriend"}
      />
    </div>
  );
};

export default NewsLetter;
