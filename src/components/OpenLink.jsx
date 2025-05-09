function OpenLink({ link }) {
  return (
    <a href={link} target="_blank">
      <img src="src/assets/open.svg" alt="open image" />
    </a>
  );
}

export default OpenLink;
