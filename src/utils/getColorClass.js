const getColorClass = (tech) => {
  switch (tech) {
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#Next.js":
      return "nextjs";
    case "#Firebase":
      return "firebase";
    case "#Jest":
      return "jest";
    case "#CI/CD":
      return "cicd";
    case "#AdobeXD":
      return "adobe-xd";
    case "#React.js":
      return "reactjs";
    case "#JWT":
      return "jwt";
    case "#Strapi":
      return "strapi";
    case "#MUI":
      return "mui";
    case "#Java":
      return "java";
    case "#C":
      return "c";
    case "#C++":
      return "cpp";
    case "#ReactJS":
      return "reactjs";
    case "#MySQL":
      return "mysql";
    case "#AWS":
      return "aws";
    case "#CloudComputing":
      return "cloud";
    case "#Eclipse":
      return "eclipse";
    case "#VisualStudio":
      return "visualstudio";
    case "#Blockchain":
      return "blockchain";
    case "#Solidity":
      return "solidity";
    case "#Ethereum":
      return "ethereum";
    case "#Bootstrap":
      return "bootstrap";
    default:
      return "";
  }
};

export default getColorClass;
