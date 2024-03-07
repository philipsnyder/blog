export function BlogPost() {
  return (
    <>
      <article aria-label="blog post">
        <div>
          <img
            src="/smiling_turkey_leg_250.jpeg"
            srcSet="/smiling_turkey_leg_250.jpeg 250w,
                    /smiling_turkey_leg_360.jpeg 360w,
                    /smiling_turkey_leg_500.jpeg 500w"
            alt="smiling turkey leg"
          ></img>
        </div>
        <div className="h-48 bg-white p-4" aria-label="blog post teaser">
          <h3 className="text-2xl font-playfair font-semibold">Bingo</h3>
          <p className="text-lg font-lato font-normal">Some nice content!</p>
        </div>
      </article>
    </>
  );
}
