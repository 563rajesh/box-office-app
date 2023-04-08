import { Link } from 'react-router-dom';
const Navs = () => {
  const LINKS = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];

  return (
    <div>
      <ul>
        {LINKS.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
