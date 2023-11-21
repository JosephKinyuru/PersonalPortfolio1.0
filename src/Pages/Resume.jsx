import resumePDF from '/src/Assets/resume.pdf';

const Resume = () => {
  return (
    <div>
      <embed src={resumePDF} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default Resume;