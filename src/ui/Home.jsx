function Home() {
  return (
    <div className="relative h-screen w-screen">
      {/* Full-screen background image */}
      <img
        src="media/bg-images/bg-natural.jpg"
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Content Section */}
      <div className="relative z-10 mb-20 flex h-full cursor-default flex-col items-center justify-center px-4 text-center">
        <h1 className="  mb-12 mr-20  text-sm font-semibold  text-stone-100   md:text-5xl">
          .הרמן אדריכלים
          <br />
          <span className="cursor-pointer font-semibold leading-[0.5] text-stone-200 transition-all duration-300 hover:text-yellow-500 md:text-lg">
            הרמן אדריכלים נוסד ב-1991 על ידי יאיר הרמן. המשרד מתמחה בתכנון
            ועיצוב בנייה פרטית, בנייה רוויה, רבי קומות, שכונות מגורים מסחר
            ומלונאות
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
