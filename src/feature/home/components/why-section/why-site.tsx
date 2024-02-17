export function WhySite({ id }: { id: string }) {
  return (
    <>
      <section className="mb-8" id={id}>
        <article>
          <h3 className="font-playfair font-bold text-4xl float-left mr-4">
            What is this place??
          </h3>
          <p className="font-lato">
            Long story short... I{" "}
            <i>
              <strong>
                <span className="text-lg">LOVE CODING, FOOD, AND TRAVEL</span>
              </strong>
              !!
            </i>
            &nbsp;After being laid off at the start of 2024, I came to a tough
            realization, I had gotten complacent and allowed myself to fall
            behind when it came to keeping up the important things in my career
            and life. Not keeping up on industry trends was just the tip of the
            iceberg. I literally lost touch on&nbsp;
            <strong className="text-lg font-extrabold font-playfair">
              trying ANYTHING new
            </strong>
            !&nbsp;<i>FOOD, TRAVEL</i>&nbsp;and even&nbsp;
            <strong className="font-black">
              <i>FAMILY</i>
            </strong>
            &nbsp;got pushed aside! I needed to find it again, and hold
            myself&nbsp;
            <strong>
              <span className="text-lg">ACCOUNTABLE!!</span>
            </strong>
            &nbsp;This site is dedicated to that idea. It's a place where I can
            learn and practice new languages and tools in software development,
            but also a place I can document new restaurants I try and places I
            travel{" "}
            <i className="text-sm">
              (even though with kids, my traveling has become signicantly less
              exotic...).
            </i>
            &nbsp;Just being honest... I'm not claiming I'm the worlds best
            developer, or the worlds biggest foodie OR exotic traveler. You
            might honestly have to be pretty bored to read through these posts.
            If this turns out to be a personal passion project that gives me
            something to put in a portfolio, <i>or</i> if only one person
            visits, I'm calling it a win. Either way,{" "}
            <strong className="text-bold text-2xl font-playfair">
              thanks for visiting!
            </strong>
          </p>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </section>
    </>
  );
}
