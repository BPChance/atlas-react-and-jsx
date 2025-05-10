import openImage from '../assets/open.svg';

function OpenLink({ link }) {
  return (
    <a href={link} target="_blank">
      <img src={openImage} alt="open image" />
    </a>
  );
}

export default OpenLink;
