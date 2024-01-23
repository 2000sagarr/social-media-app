import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start garp-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold ml-2 md:h2-bold text-left w-full">
            Create Post
          </h2>
        </div>

        <PostForm action={"Create"} />
      </div>
    </div>
  );
};

export default CreatePost;
