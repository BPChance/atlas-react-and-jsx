import copyImage from '../assets/copy.svg';

function CopyLink({ link }) {
  const copyLink = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('Link copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <img
      src={copyImage}
      alt="copy image"
      className="copy"
      link={link}
      onClick={copyLink}
    />
  );
}

export default CopyLink;
