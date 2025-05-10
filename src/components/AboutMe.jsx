import profileImage from '../assets/profile.jpeg';

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profileImage} alt="Profile photo" />
      <p>
        Hi, I'm Braden Chance, a Software Engineer currently in my fifth
        trimester at Atlas School. I specialize in full-stack web development
        and enjoy working with JavaScript, React, Node.js, and MongoDB. After
        graduation, I plan to pursue a career in web or application development,
        where I can build innovative solutions and continue to grow my skills in
        the tech industry.
      </p>
    </div>
  );
}

export default AboutMe;
