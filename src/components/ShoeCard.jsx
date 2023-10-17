const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg, theme }) => {
  const clickHandler = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex`}
      onClick={clickHandler}
      role="button"
    >
      <div
        className={`flex items-center justify-center rounded-xl bg-coral-red dark:bg-slate-dark-800 ${
          theme === "light" ? "bg-card" : ""
        } bg-center max-sm:p-4 sm:h-40 sm:w-40`}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
