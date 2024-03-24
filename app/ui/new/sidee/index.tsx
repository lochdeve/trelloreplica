const Sidebar = () => {
  return (
    <aside
      style={{
        position: 'fixed',
        width: '50px',
        height: '100vh',
        backgroundColor: '#555',
        transition: 'width 0.3s',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <a href='#'>Link 1</a>
        </li>
        <li>
          <a href='#'>Link 2</a>
        </li>
        <li>
          <a href='#'>Link 3</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
