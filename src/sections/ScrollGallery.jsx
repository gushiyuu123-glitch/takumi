import GalleryItem from "./GalleryItem";

export default function ScrollGallery() {
  return (
    <section className="bg-[#efefec]">
      <div
        className="
          py-[22vh]
          md:py-[20vh]

          space-y-[18vh]
          md:space-y-[22vh]
        "
      >
        <GalleryItem
          align="left"
          src="/images/ScrollGallery1.png"
          label="Entrance space"
        />

        <GalleryItem
          align="center"
          src="/images/ScrollGallery2.png"
          label="Main living area"
        />

        <GalleryItem
          align="right"
          src="/images/ScrollGallery3.png"
          label="Depth of the interior"
        />
      </div>
    </section>
  );
}
