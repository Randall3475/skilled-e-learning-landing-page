export default function Features() {
  return (
    <>
      <section className="features-background desktop:pb-[232px] desktop:pt-[183px] tablet:pb-[86px] desktop:px-4 tablet:px-[39px] tablet:pt-[200px] px-4 pb-[80px]">
        <div className="container mx-auto desktop:gap-x-[30px] desktop:gap-y-[56px] tablet:gap-y-16 tablet:gap-x-[10px] grid desktop:grid-cols-3 tablet:grid-cols-2 gap-y-16">
          <div className="bg-gradient-to-b from-pr-gradient-first to-pr-gradient-second rounded-[15px]">
            <h2 className="font-extrabold text-[32px] leading-[40px] text-white tablet:px-8 tablet:pt-16 px-[28px] pt-[24px] pb-[32px]">
              Check out our most popular courses!
            </h2>
          </div>
          <div className="rounded-[15px] bg-white card-shadow px-8 pb-[40px] grid">
            <img
              className="mt-[-2rem] mb-6"
              src="./images/icon-animation.svg"
              alt="Man running"
            />
            <h3 className="text-pr-dark-purple font-extrabold text-[24px] leading-[30px] mb-6">
              Animation
            </h3>
            <p className="text-pr-gray font-medium text-[18px] leading-[28px] mb-6">
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <a
              className="transition-colors hover:text-sr-hover-color self-end capitalize font-bold text-pr-redish-pink text-[18px] leading-[28px]"
              href="#"
            >
              Get started
            </a>
          </div>
          <div className="rounded-[15px] bg-white card-shadow px-8 pb-[40px] grid">
            <img
              className="mt-[-2rem] mb-6"
              src="./images/icon-design.svg"
              alt="Man running"
            />
            <h3 className="text-pr-dark-purple font-extrabold text-[24px] leading-[30px] mb-6">
              Design
            </h3>
            <p className="text-pr-gray font-medium text-[18px] leading-[28px] mb-6">
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
            <a
              className="transition-colors hover:text-sr-hover-color self-end capitalize font-bold text-pr-redish-pink text-[18px] leading-[28px]"
              href="#"
            >
              Get started
            </a>
          </div>
          <div className="rounded-[15px] bg-white card-shadow px-8 pb-[40px] grid">
            <img
              className="mt-[-2rem] mb-6"
              src="./images/icon-photography.svg"
              alt="Man running"
            />
            <h3 className="text-pr-dark-purple font-extrabold text-[24px] leading-[30px] mb-6">
              Photography
            </h3>
            <p className="text-pr-gray font-medium text-[18px] leading-[28px] mb-6">
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
            <a
              className="transition-colors hover:text-sr-hover-color self-end capitalize font-bold text-pr-redish-pink text-[18px] leading-[28px]"
              href="#"
            >
              Get started
            </a>
          </div>
          <div className="rounded-[15px] bg-white card-shadow px-8 pb-[40px] grid">
            <img
              className="mt-[-2rem] mb-6"
              src="./images/icon-crypto.svg"
              alt="Man running"
            />
            <h3 className="text-pr-dark-purple font-extrabold text-[24px] leading-[30px] mb-6">
              Crypto
            </h3>
            <p className="text-pr-gray font-medium text-[18px] leading-[28px] mb-6">
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
            <a
              className="transition-colors hover:text-sr-hover-color self-end capitalize font-bold text-pr-redish-pink text-[18px] leading-[28px]"
              href="#"
            >
              Get started
            </a>
          </div>
          <div className="rounded-[15px] bg-white card-shadow px-8 pb-[40px] grid">
            <img
              className="mt-[-2rem] mb-6"
              src="./images/icon-business.svg"
              alt="Man running"
            />
            <h3 className="text-pr-dark-purple font-extrabold text-[24px] leading-[30px] mb-6">
              Business
            </h3>
            <p className="text-pr-gray font-medium text-[18px] leading-[28px] mb-6">
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>
            <a
              className="transition-colors hover:text-sr-hover-color self-end capitalize font-bold text-pr-redish-pink text-[18px] leading-[28px]"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
