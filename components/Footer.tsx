export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {year} Ricardo Teston Semensato</p>
      </div>
    </footer>
  );
}
