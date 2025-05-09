import OpenLink from './OpenLink';
import CopyLink from './CopyLink';

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      <h3>{label}</h3>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;
