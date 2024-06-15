import GalleryItem from "./GalleryItem";

function Gallery(props) {
  const display = props.data.map((item) => {
    return (
      <GalleryItem
        item={item}
        key={item.trackId}
      />
    );
  });

  return <div>{display}</div>;
}

export default Gallery;
